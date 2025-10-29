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

    
   
}
export default CardapioController;