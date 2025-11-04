import Adm from '../models/Admin.js';

const admController = {

  criarAdminPadrao: async () => {
    try {
      const adminExistente = await Adm.findOne({ where: { name: "admin" } });

      if (!adminExistente) {
        await Adm.create({ name: "admin", password: "123" });
        console.log("Administrador padrão criado: admin / 123");
      } else {
        console.log("ℹAdministrador padrão já existe");
      }
    } catch (error) {
      console.error("Erro ao criar admin padrão:", error);
    }
  },

  PaginaAdm: (req, res) => {
    res.render('admin');
  },

  addNewAdm: async (req, res) => {
    const { name, password } = req.body;
    try {
      await Adm.create({ name, password });
      res.send("Sucesso ao registrar-se!");
    } catch (error) {
      console.error("Erro ao registrar-se:", error);
      res.status(500).send('Erro ao registrar-se.');
    }
  },

  PaginaAdmLogin: (req, res) => {
    res.render('loginAdm');
  },

  authentication: async (req, res) => {
    const { name, password } = req.body;
    try {
      const admins = await Adm.findAll();
      const confirma = admins.some(a => a.name === name && a.password === password);
      if (confirma) {
        res.render("principaladm", { layout: "mainAdm" });
      } else {
        res.send("Nome ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao buscar administradores:", error);
      res.status(500).send('Erro ao buscar administradores.');
    }
  },

  
};

// Executa a função ao carregar o controller
admController.criarAdminPadrao();

export default admController;
