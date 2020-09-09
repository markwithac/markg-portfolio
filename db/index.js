const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Library = require('./models/library.js')(sequelize);

module.exports = db;