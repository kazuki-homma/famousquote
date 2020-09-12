'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    pass: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
    },
  }, {});
  User.associate = function(models) {
    //associations can be defined here
  };
  return User;
};