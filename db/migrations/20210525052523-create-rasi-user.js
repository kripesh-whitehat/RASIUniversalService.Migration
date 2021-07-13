'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RasiUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PortalUserID: {
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING(20)
      },
      MiddleName: {
        type: Sequelize.STRING(15)
      },
      LastName: {
        type: Sequelize.STRING(25)
      },
      Email: {
        type: Sequelize.STRING(100)
      },
      LastSelectedUnit: {
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
    await queryInterface.dropTable('RasiUsers');
  }
};