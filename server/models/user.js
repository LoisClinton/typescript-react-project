const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const User = sequelize.define("users", {
  displayName: Sequelize.STRING,
  age: Sequelize.INTEGER,
  favouriteTopic: Sequelize.STRING,
  bio: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
