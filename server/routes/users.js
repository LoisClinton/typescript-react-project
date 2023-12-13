const express = require("express");
const router = express.Router();
const { User, Score } = require("../models/index");

router.get("/", async (req, res) => {
  try {
    //getting all users
    const users = await User.findAll();
    return res.send(users);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

// get user and scores
router.get("/:userEmail/scores", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: `${req.params.userEmail}`,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const userID = user.id;

    const scores = await Score.findAll({
      where: {
        UserId: userID,
      },
    });

    if (!scores) {
      return res.status(404).send({ message: "Scores not found" });
    }

    return res.send(scores);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

// get a users friends
router.get("/:id/friends", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const allFriends = await user.getFriends();

    // returns all friends of the person
    return res.send(allFriends);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

// User add friend
router.put("/:id/:friendName", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const friend = await User.findOne({
      where: {
        displayName: `${req.params.friendName}`,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (!friend) {
      return res.status(404).send({ message: "Friend User not found" });
    }

    //so you cant add yourself as a friend
    if (friend.displayName !== user.displayName) {
      // Check if the users are already friends
      const areFriends = await user.hasFriend(friend);

      // If they are not friends, add the friend
      if (!areFriends) {
        await user.addFriend(friend);
      }
    }

    const hasFriends = await user.getFriends();

    // returns all friends of the person
    return res.send(hasFriends);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

router.post("/register", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    //create the new user
    const user = await User.create({
      displayName: req.body.displayName,
      age: req.body.age,
      favouriteTopic: req.body.favouriteTopic,
      bio: req.body.bio,
      email: req.body.email,
      password: req.body.password,
    });
    return res.send(user);
  } catch (error) {
    //send any erros
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send({ message: "Inputs cannot be empty." });
  }
  try {
    //Find the user
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      // checks if the user does not exist
      return res.status(404).send({ message: "Invalid user" });
    } else {
      // checks if the passwords match
      if (user.password === req.body.password) {
        return res.send(user);
      } else {
        return res.status(400).send({ message: "Incorrect password" });
      }
    }
  } catch (error) {
    //send any erros
    res.send(error);
  }
});

module.exports = router;
