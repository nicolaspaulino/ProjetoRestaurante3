import { Sequelize, sequelize } from '../config/db.js';

const User = sequelize.define('Usuario', {
    id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
   nome: {
       type: Sequelize.STRING,
       allowNull: false
    },
   senha: {
        type: Sequelize.STRING,
        allowNull: false
     }
 })
 sequelize.sync({ force: false })
    .then(() => {  
       console.log('Tabela usuario criada com sucesso!');
    })
    .catch((error) => {
       console.error('Erro ao criar tabela usuario:', error);
    });
 export default User;