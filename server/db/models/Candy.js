const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },

  quantity: {
    type: Sequelize.INTEGER,

    validate: {
      min: 0,
      max: 10,
    }
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://kado.de/images/shop/product/noa-tritlar-150g-tuete-1850.jpg',
  },

});
