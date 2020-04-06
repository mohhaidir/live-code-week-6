'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Users extends Model { }

  Users.init({
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, { sequelize });

  Users.associate = function (models) {
    // associations can be defined here
    Users.belongsTo(models.Foods)
  };
  return Users;
};