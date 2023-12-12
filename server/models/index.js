const User = require("./user");
const Topic = require("./topic");
const Score = require("./score");

// Associations here

// One to Many => User to Scores
User.hasMany(Score);
Score.belongsTo(User);

// Many to Many => User to User
User.belongsToMany(User, {
  as: "Friends",
  through: "UserFriends", // your join table name
  foreignKey: "userId",
  otherKey: "friendId",
});

module.exports = {
  User,
  Topic,
  Score,
};
