'use strict';
const data = require('../data/company.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    data.forEach(item => {
      item.createdAt = new Date(),
        item.updatedAt = new Date()
    })
    return queryInterface.bulkInsert("Companies", data)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Companies", null)
  }
};