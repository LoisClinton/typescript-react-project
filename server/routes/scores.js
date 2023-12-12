const express = require("express");
const router = express.Router();
const { User, Score } = require("../models/index");

router.get("/", async (req, res) => {
  try {
    //getting all Scores
    const scores = await Score.findAll();
    return res.send(scores);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

router.get("/:topicName", async (req, res) => {
  try {
    //getting all/one Score/s with a certain name
    const score = await Score.findAll({
      where: { topicName: req.params.topicName },
    });
    return res.send(score);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

router.post("/:topicName/:email", async (req, res) => {
  try {
    //posting one Score with a Topic name and User email

    const user = await User.findOne({
      where: {
        email: req.params.email,
      },
    });

    console.log(user);

    const score = await Score.create({
      topicName: req.body.topicName,
      difficulty: req.body.difficulty,
      correct: req.body.correct,
      incorrect: req.body.incorrect,
    });

    console.log(score);

    await user.addScore(score);

    const allScores = await User.findOne({
      where: {
        email: req.params.email,
      },
      include: { model: Score },
    });

    return await res.send({ allScores });
  } catch (error) {
    //send any erros

    return res.send(error);
  }
});

module.exports = router;
