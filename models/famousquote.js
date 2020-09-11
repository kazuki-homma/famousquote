'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FamousQuote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FamousQuote.init({
    content: DataTypes.STRING,
    detail: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FamousQuote',
  });
  return FamousQuote;
};