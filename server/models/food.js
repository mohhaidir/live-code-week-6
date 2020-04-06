'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.sequelize
  class Foods extends Model { }

  Foods.init({
    title: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    ingredients: {
      type: DataTypes.STRING
    },
    tag: {
      type: DataTypes.STRING
    }
  }, { sequelize });

  Foods.associate = function (models) {
    // associations can be defined here
    Foods.hasMany(models.user)
  };
  return Foods;
};