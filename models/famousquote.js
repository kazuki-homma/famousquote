'use strict';
module.exports = (sequelize, DataTypes) => {
  const FamousQuote = sequelize.define('FamousQuote', {
    content: DataTypes.STRING,
    detail: DataTypes.STRING,
    author: DataTypes.STRING
  },{});
  FamousQuote.associate = function(models) {
    // associations can be defined here
  };
  return FamousQuote;
};