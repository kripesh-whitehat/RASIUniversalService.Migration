'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: { type: DataTypes.STRING(50), validate: { max: 50 } },
    lastname: { type: DataTypes.STRING(50), validate: { max: 50 } },
    email: { type: DataTypes.STRING(100), unique: true, validate: { isEmail: true, max: 100, notEmpty: true } },
    password: { type: DataTypes.STRING(100), validate: { max: 100, notEmpty: true } },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
  });
  
  return User;
};