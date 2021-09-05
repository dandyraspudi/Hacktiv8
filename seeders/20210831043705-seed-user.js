'use strict';
const data = require('../data/user.json')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    data.forEach(item => {
      item.createdAt = new Date(),
      item.updatedAt = new Date()
    })
    return queryInterface.bulkInsert("Users", data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
