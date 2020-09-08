//  This file should require the 'sequelize' module and export the initialized Movie model as shown below:

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Library extends Sequelize.Model {}
  Library.init({
    title: { type: Sequelize.STRING, allowNull: false },
    author: { type: Sequelize.STRING, allowNull: true},
    year: { type: Sequelize.INTEGER, allowNull: true}
  }, { sequelize });

  return Library;
};

