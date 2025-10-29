import User from '../models/Usuario.js';

const UserController = {

    PaginaUser: (req, res) => {
        res.render('usuarios');
    },

    addNewUser: async (req, res) => {
        const {nome, senha} = req.body;
        try {
            await User.create({ nome, senha });
            res.send("Sucesso ao registrar-se!")
        } catch (error) {
            console.error("Erro ao registrar-se:", error);
            res.status(500).send('Erro ao registrar-se.');
        }
    },

    PaginaUserLogin: (req, res) => {
        res.render('loginUser');
    },
    authentication: async (req, res) =>
    {
        const { nome, senha } = req.body;
        try {

            const mensagens = await User.findAll();
            let confirma = false;
               
            mensagens.forEach(admin => {
            const data = admin.toJSON();


            if (data.nome === nome && data.senha === senha) {
                confirma = true;
            }
            
        });
        if (confirma) {
            UserController.MenuUser(req, res);
        } else {
            res.send("Nome ou senha incorretos!");
        }
                   
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
            res.status(500).send('Erro ao buscar mensagens.');
        }
    },
    MenuUser: (req, res) => {
        res.render("principalUser",  { layout: 'mainUser' })
    }
};
export default UserController;