'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Migrations', [{
      title: 'AWSQA - AWSQA4',
      description: 'Test Migration 1',
      start_datetime: new Date(),
      end_datetime: null,
      status: 'initializing',
      message: 'just begun',
      createdAt: new Date(),
      updatedAt: new Date(),
      cluster_from: 1,
      cluster_to: 2
    }, {
      title: 'AWSQA4 - AWSQA',
      description: 'Test Migration 2',
      start_datetime: null,
      end_datetime: null,
      status: 'pending',
      message: 'error in authentication',
      createdAt: new Date(),
      updatedAt: new Date(),
      cluster_from: 2,
      cluster_to: 1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Migrations', null, {});
  }
};
