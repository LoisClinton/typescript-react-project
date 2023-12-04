const express = require("express");
const router = express.Router();

// different model routers
router.use("/users", require("./users"));
router.use("/topics", require("./topics"));

module.exports = router;
