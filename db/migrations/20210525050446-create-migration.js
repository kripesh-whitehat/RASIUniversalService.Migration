'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Migrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(50)
      },
      start_datetime: {
        type: Sequelize.DATE
      },
      end_datetime: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('pending', 'initializing', 'successful', 'failed'),
        defaultValue: 'pending'
      },
      message: {
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Migrations');
  }
};