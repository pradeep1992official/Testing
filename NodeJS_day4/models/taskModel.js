const mongoose = require("mongoose");

// Mongoose schema for Task model with 'title' (String, required) and 'completed' (Boolean, default: false) fields
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});
// The collection name in MongoDB will be 'tasks' (Mongoose pluralizes model names)
const Task = mongoose.model("Task", taskSchema);

// Mongoose model for tasks
module.exports = Task;
