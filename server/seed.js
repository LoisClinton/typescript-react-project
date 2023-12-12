const { users, topics, scores } = require("./seedData.js");

const { sequelize } = require("./db");
const { User } = require("./models");
const { Topic } = require("./models");
const { Score } = require("./models");

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(topics.map((topic) => Topic.create(topic)));

    const user = await User.findOne({
      where: {
        email: "lois@email.com",
      },
    });

    await Promise.all(
      scores.map((score) => {
        const newScore = Score.create(score);
        user.addScore(newScore);
      })
    );

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
