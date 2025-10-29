import { Sequelize, sequelize } from '../config/db.js';

const Adm = sequelize.define('Admin', {
    id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
   name: {
       type: Sequelize.STRING,
       allowNull: false
    },
   password: {
        type: Sequelize.STRING,
        allowNull: false
     }
 })
 sequelize.sync({ force: false })
    .then(() => {  
       console.log('Tabela admin criada com sucesso!');
    })
    .catch((error) => {
       console.error('Erro ao criar tabela admin:', error);
    });
 export default Adm;