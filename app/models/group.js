'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Group.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    GroupID: DataTypes.INTEGER,
    GroupName: DataTypes.STRING(50),
    ClusterID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group',
  });


  Group.associate = models => {
    Group.belongsTo(models.Cluster, { foreignKey: 'ClusterID', as: 'Clusters' });
  };

  return Group;
};