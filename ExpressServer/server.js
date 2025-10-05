const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 2800;
const mongoDB = process.env.MONGO_DB;

app.use(express.json());

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);

app.get("/", async (req, res) => {
  const userData = await userModel.find();
  res.json(userData);
});

app.post("/addUser", async (req, res) => {
  const getBody = req.body;
  const user = new userModel(getBody);
  await user.save();
  res.json({ message: "User added successfully" });
});

//delete user
app.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  await userModel.findByIdAndDelete(userId);
  res.json({ message: "User deleted successfully" });
});

//update user
app.put("/updateUser/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  await userModel.findByIdAndUpdate(userId, updatedData);
  res.json({ message: "User updated successfully" });
});   