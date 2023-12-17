const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Request = sequelize.define("requests", {
  displayName: Sequelize.STRING,
  age: Sequelize.INTEGER,
  favouriteTopic: Sequelize.STRING,
  bio: Sequelize.STRING,
});

module.exports = Request;
