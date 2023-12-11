const express = require("express");
const router = express.Router();
const { User } = require("../models");

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
        email: req.params.email,
      },
      include: { model: Score },
    });

    return res.send(user);
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
