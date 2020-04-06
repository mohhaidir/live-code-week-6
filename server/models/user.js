'use strict';
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt')
  const { Model } = sequelize.Sequelize
  class Users extends Model { }

  Users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeSave: (user, option) => {
        return bcrypt.hash(user.password, 8)
          .then((hash) => {
            user.password = hash
          })
      }
    },
    sequelize
  });

  Users.associate = function (models) {
    // associations can be defined here
    // Users.belongsTo(models.Foods, { foreignKey: 'UserId' })
  };
  return Users;
};