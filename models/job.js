'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.User, {
        foreignKey: 'authorId'
      })
      Job.belongsTo(models.Company, {
        foreignKey: 'companyId'
      })
    }
  };
  Job.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "title is required"
        }
      }
    },
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    jobType: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};