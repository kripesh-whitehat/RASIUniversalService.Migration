'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn(
      'Migrations',
      'cluster_from',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clusters',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
     await queryInterface.addColumn(
      'Migrations',
      'cluster_to',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clusters',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Migrations', // name of Source model
      'cluster_from' // key we want to remove
    );
    await queryInterface.removeColumn(
      'Migrations', // name of Source model
      'cluster_to' // key we want to remove
    );
  }
};
