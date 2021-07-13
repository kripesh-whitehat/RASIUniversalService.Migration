'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clusters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cluster_name: {
        type: Sequelize.STRING(50)
      },
      slug: {
        type: Sequelize.STRING(50), unique: true, allowNull: false
      },
      type: {
        type: Sequelize.ENUM('DEV', 'STAGING', 'REGRESSION', 'PROD'),
        defaultValue: 'DEV'
      },
      hostname: {
        type: Sequelize.STRING(100), allowNull: false
      },
      port: {
        type: Sequelize.SMALLINT, allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_by: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Clusters');
  }
};