const Task = require("../models/taskModel");
console.log(Task);
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    console.log(tasks);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error in getTasks" });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error in createTasks" });
  }
};

module.exports = { getTasks, createTasks };
