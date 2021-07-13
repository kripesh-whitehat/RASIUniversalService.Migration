'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RasiUserUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RasiUserUnit.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    PortalUserID: DataTypes.INTEGER,
    UnitID: DataTypes.INTEGER,
    ClusterID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RasiUserUnit',
  });

  RasiUserUnit.associate = models => {
    RasiUserUnit.belongsTo(models.Cluster, { foreignKey: 'ClusterID', as: 'Clusters' });
    RasiUserUnit.belongsTo(models.RasiUser, { foreignKey: 'PortalUserID', as: 'RasiUsers' });
  };

  return RasiUserUnit;
};