const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Topic = sequelize.define("topics", {
  name: Sequelize.STRING,
  categoryNumber: Sequelize.INTEGER,
});

module.exports = Topic;
