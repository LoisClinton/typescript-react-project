const { users, topics } = require("./seedData.js");

const { sequelize } = require("./db");
const { User } = require("./models");
const { Topic } = require("./models");

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(topics.map((topic) => Topic.create(topic)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
