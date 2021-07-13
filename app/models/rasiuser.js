'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RasiUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RasiUser.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    PortalUserID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING(20),
    MiddleName: DataTypes.STRING(15),
    LastName: DataTypes.STRING(25),
    Email: DataTypes.STRING(100),
    LastSelectedUnit: DataTypes.INTEGER,
    ClusterID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RasiUser',
  });

  RasiUser.associate = models => {
    RasiUser.belongsTo(models.Cluster, { foreignKey: 'ClusterID', as: 'Clusters' });
  };

  return RasiUser;
};