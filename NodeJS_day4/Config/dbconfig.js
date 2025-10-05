const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FSD");
    // await mongoose.connect("mongodb+srv://pradhiip92_db_user:yZBt9ZwAFtsA9vjm@cluster0.rdpge6b.mongodb.net/FSD");
    console.log("DB Connected successfully");
  }
  catch (err) {
    console.log("The error is : " , err);
  }            
};

module.exports = dbConnect;

