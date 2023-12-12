const { users, topics, scores } = require("./seedData.js");

const { sequelize } = require("./db");
const { User, Topic, Score } = require("./models/index");

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(topics.map((topic) => Topic.create(topic)));

    const user = await User.findByPk(6);
    console.log(user);

    scores.map(async (score) => {
      const newScore = await Score.create(score);
      await user.addScore(newScore);
      const userScores = await user.getScores();
      console.log(userScores);
    });

    const allUsers = await User.findAll();

    const addFriendsPromises = allUsers.map(async (friend) => {
      if (friend.displayName !== user.displayName) {
        // Check if the users are already friends
        const areFriends = await user.hasFriend(friend);

        // If they are not friends, add the friend
        if (!areFriends) {
          await user.addFriend(friend);
        }
      }
    });

    // Wait for all addFriend operations to complete
    await Promise.all(addFriendsPromises);

    const hasFriends = await user.getFriends();

    console.log("HAS FRIENDS:", hasFriends);
    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
