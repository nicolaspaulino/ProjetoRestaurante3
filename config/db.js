import Sequelize from 'sequelize';
const sequelize = new Sequelize('Restaurante', 'root', 'ifsp', {
   host: "localhost",
   dialect: 'mysql'
});
export { Sequelize, sequelize };