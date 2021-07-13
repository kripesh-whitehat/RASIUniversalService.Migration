'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Migration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Migration.init({
    id                 : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title              : DataTypes.STRING,
    description        : DataTypes.STRING(50),
    start_datetime     : DataTypes.DATE,
    end_datetime       : DataTypes.DATE,
    status             : { type: DataTypes.ENUM('pending', 'initializing', 'successful', 'failed'), defaultValue: 'pending' },
    message            : DataTypes.STRING(50),
    cancellation_status: { type: DataTypes.BOOLEAN, defaultValue: false },
    cluster_from       : DataTypes.INTEGER,
    rds_username_from  : { type: DataTypes.STRING(50) },
    rds_password_from  : { type: DataTypes.STRING(50) },
    cluster_to         : DataTypes.INTEGER,
    rds_username_to    : { type: DataTypes.STRING(50) },
    rds_password_to    : { type: DataTypes.STRING(50) },
    group_id           : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Migration',
  });


  Migration.associate = models => {
    Migration.belongsTo(models.Cluster, { foreignKey: 'cluster_from', targetKey: 'id', as: 'Clusters From' });
    Migration.belongsTo(models.Cluster, { foreignKey: 'cluster_to', targetKey: 'id', as: 'Clusters To' });
    Migration.belongsTo(models.Group, { foreignKey: 'group_id', targetKey: 'id', as: 'Groups' });
  };

  return Migration;
};