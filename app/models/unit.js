'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Unit.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UnitID: DataTypes.INTEGER,
    UnitName: DataTypes.STRING(50),
    GroupID: DataTypes.INTEGER,
    ClusterID: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Unit',
  });


  Unit.associate = models => {
    Unit.belongsTo(models.Cluster, { foreignKey: 'ClusterID', as: 'Clusters' });
    Unit.belongsTo(models.Group, { foreignKey: 'GroupID', targetKey: 'GroupID', as: 'Groups' });
  };


  return Unit;
};