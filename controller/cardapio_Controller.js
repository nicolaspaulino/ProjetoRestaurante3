import Cardapio from "../models/Cardapio.js"

const CardapioController = {

    listallprodutos: async (req, res) =>
    {
        try {
            const mensagens = await Cardapio.findAll({
                order: [['createdAt', 'DESC']]
            });
            res.render('cardapio', {
                cardapio: mensagens.map(msg => msg.toJSON())
              });              
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
            res.status(500).send('Erro ao buscar mensagens.');
        }
    },

    paginagaAdd: async(req,res) => {
        res.render("formularioAddproduto")
    },

    listallGerenciador: async (req, res) =>
    {
        try {
            const mensagens = await Cardapio.findAll({
                order: [['createdAt', 'DESC']]
            });
            res.render('PaginaGerenciar', {
                cardapio: mensagens.map(msg => msg.toJSON())
              });              
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
            res.status(500).send('Erro ao buscar mensagens.');
        }
    },

    addProduto: async (req, res) => {
        const {produto, tipo, preco} = req.body;
        try {
          await Cardapio.create({ tipo, produto, preco});
          res.alert("Produto adicionado com sucesso!");
        } catch (error) {
          console.error("Erro ao adicionar produto:", error);
          res.status(500).send("Erro ao adicionar produto.");
        }
    },

    paginaEditar: async (req, res) => {
        try {
          console.log("ID recebido:", req.params.id);

          const item = await Cardapio.findByPk(req.params.id);
          if (!item) {
            return res.send("Item não encontrado!");
          }
          console.log("Produto encontrado:", item.toJSON());

          res.render("gerenciarproduto", {
            layout: "mainAdm",
            item: item.toJSON(),
          });
        } catch (error) {
          console.error("Erro ao buscar item:", error);
          res.status(500).send("Erro ao buscar item.");
        }
    },

    editarProduto: async (req, res) => {
        const { produto, tipo, preco } = req.body;
        try {
          await Cardapio.update(
            { produto, tipo, preco },
            { where: { id: req.params.id } }
          );
          res.redirect("/cardapio/gerenciar");
        } catch (error) {
          console.error("Erro ao atualizar produto:", error);
          res.status(500).send("Erro ao atualizar produto.");
        }
    },

    excluirProduto: async (req, res) => {
        try {
          await Cardapio.destroy({ where: { id: req.params.id } });
          res.redirect("/cardapio/gerenciar");
        } catch (error) {
          console.error("Erro ao excluir produto:", error);
          res.status(500).send("Erro ao excluir produto.");
        }
    },
    
   
}
export default CardapioController;