const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Score = sequelize.define("scores", {
  topicName: Sequelize.STRING,
  difficulty: Sequelize.STRING,
  correct: Sequelize.INTEGER,
  incorrect: Sequelize.INTEGER,
});

module.exports = Score;
