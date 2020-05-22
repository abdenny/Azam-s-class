'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      post_id: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {};
  return User;
};
