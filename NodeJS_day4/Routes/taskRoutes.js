const express = require("express");
const { getTasks, createTasks } = require("../Controller/taskController");

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

module.exports = router;
