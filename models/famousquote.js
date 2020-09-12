'use strict';
module.exports = (sequelize, DataTypes) => {
  const FamousQuotes = sequelize.define('FamousQuotes', {
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    detail: DataTypes.STRING,
    author: DataTypes.STRING
  },{});
  FamousQuotes.associate = function(models) {
    // associations can be defined here
  };
  return FamousQuotes;
};