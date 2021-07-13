'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Clusters', 
      'rds_hostname',
      {
        type: Sequelize.STRING(100),
      }
    );
    await queryInterface.addColumn(
      'Migrations', 
      'rds_username_from',
      {
        type: Sequelize.STRING(50),
      }
    );
    await queryInterface.addColumn(
      'Migrations', 
      'rds_password_from',
      {
        type: Sequelize.STRING(50),
      }
    );
    await queryInterface.addColumn(
      'Migrations', 
      'rds_username_to',
      {
        type: Sequelize.STRING(50),
      }
    );
    await queryInterface.addColumn(
      'Migrations', 
      'rds_password_to',
      {
        type: Sequelize.STRING(50),
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Clusters',
      'rds_hostname'
    );
    await queryInterface.removeColumn(
      'Migrations',
      'rds_username_from'
    );
    await queryInterface.removeColumn(
      'Migrations',
      'rds_password_from'
    );
    await queryInterface.removeColumn(
      'Migrations',
      'rds_username_to'
    );
    await queryInterface.removeColumn(
      'Migrations',
      'rds_password_to'
    );
  }
};
