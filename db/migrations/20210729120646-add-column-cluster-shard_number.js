'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn(
      'Clusters', // name of Source model table name
      'shard_number', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );
  },

  down: async (queryInterface, Sequelize) => {   
     await queryInterface.removeColumn(
      'Clusters', // name of Source model
      'shard_number' // key we want to remove
    );
  }
};
