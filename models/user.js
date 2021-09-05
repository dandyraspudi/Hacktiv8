'use strict';
const {
  Model
} = require('sequelize');
const {
  encode
} = require('../helper/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Job, {
        foreignKey: 'authorId'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Email format is wrong"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required"
        },
        len: [5]
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = encode(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};