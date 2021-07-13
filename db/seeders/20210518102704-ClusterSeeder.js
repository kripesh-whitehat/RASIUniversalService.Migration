'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Clusters', [{
      cluster_name: 'AWS QA CLUSTER',
      slug: 'AWSQA',
      type: 'REGRESSION',
      hostname: 'accounting.awsqa3.restacct.local',
      port: '85',
      description: 'This is test qa server in aws',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cluster_name: 'AWSQA4 CLUSTER',
      slug: 'AWSQA4',
      type: 'REGRESSION',
      hostname: 'accounting.awsqa4.restacct.local',
      port: '85',
      description: '',
      created_by: 1,
      rds_hostname: 'rds4.awsqa4.restacct.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Clusters', null, {});

  }
};
