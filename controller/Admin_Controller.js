import Adm from '../models/Admin.js';

const admController = {

    PaginaAdm: (req, res) => {
        res.render('admin');
    },

    addNewAdm: async (req, res) => {
        const {name, password} = req.body;
        try {
            await Adm.create({ name, password });
            res.send("Sucesso ao registrar-se!")
        } catch (error) {
            console.error("Erro ao registrar-se:", error);
            res.status(500).send('Erro ao registrar-se.');
        }
    },

    PaginaAdmLogin: (req, res) => {
        res.render('loginAdm');
    },
    authentication: async (req, res) =>
    {
        const { name, password } = req.body;
        try {

            const mensagens = await Adm.findAll();
            let confirma = false;

            mensagens.forEach(admin => {
            const data = admin.toJSON();


            if (data.name === name && data.password === password) {
                confirma = true;
            }
            
        });
        if (confirma) {
            res.send("Login realizado com sucesso!");
        } else {
            res.send("Nome ou senha incorretos!");
        }
                   
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
            res.status(500).send('Erro ao buscar mensagens.');
        }
    }
};
export default admController;