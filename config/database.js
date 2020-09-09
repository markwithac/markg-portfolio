const { Sequelize } = require('sequelize');

module.exports = new Sequelize('portfolio', 'postgres', 'u8yojj7f', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
},);
