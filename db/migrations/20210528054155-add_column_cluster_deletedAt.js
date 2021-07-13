'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
      'Clusters', // name of Source model table name
      'deletedAt', // name of the key we're adding 
      {
        type: Sequelize.DATE,
        allowNull: true
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn(
      'Clusters', // name of Source model
      'deletedAt' // key we want to remove
    );
  }
};
