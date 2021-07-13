'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Migrations', 
      'cancellation_status',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    );
  },
  down: async queryInterface => {
    await queryInterface.removeColumn(
      'Migrations',
      'cancellation_status'
    );
  }
};
