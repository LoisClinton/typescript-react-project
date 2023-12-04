const express = require("express");
const router = express.Router();
const { Topic } = require("../models");

router.get("/", async (req, res) => {
  try {
    //getting all Topics
    const topics = await Topic.findAll();
    return res.send(topics);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

router.get("/:name", async (req, res) => {
  try {
    //getting one topics
    const topic = await Topic.findOne({ where: { name: req.params.name } });
    return res.send(topic);
  } catch (error) {
    //send any erros
    return res.send(error);
  }
});

module.exports = router;
