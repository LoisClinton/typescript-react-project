const User = require("./user");
const Topic = require("./topic");
const Score = require("./score");

// Associations here
// one to many => user to scores
User.hasMany(Score);
Score.belongsTo(User);

// Many to many User to User

module.exports = {
  User,
  Topic,
  Score,
};
