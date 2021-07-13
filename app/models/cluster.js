'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cluster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cluster.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cluster_name: { type: DataTypes.STRING(50), validate: { max: 50, notEmpty: true } },
    slug: { type: DataTypes.STRING(50), unique: true, validate: { max: 50, notEmpty: true } },
    type: { type: DataTypes.ENUM('DEV', 'STAGING', 'REGRESSION', 'PROD'), defaultValue: 'DEV' },
    hostname: { type: DataTypes.STRING(100), validate: { max: 100, notEmpty: true } },
    port: { type: DataTypes.SMALLINT },
    description: { type: DataTypes.TEXT },
    rds_hostname: { type: DataTypes.STRING(100) },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cluster',
    paranoid: true,
  });
  return Cluster;
};