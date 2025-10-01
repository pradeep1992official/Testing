const express = require("express");  //Load the express module
const app = express(); //assign it to app variable
const PORT = 3000; //assign a port number

//Function to return square of a number
function getValue(a) {
  return a*a;
}

//Create a route for the home page
app.get("/", (req,res) => {
  res.send(getValue(2));
})

//Server initalization
app.listen(PORT, ()=>{
  console.log("Server is running on PORT : " , PORT)
})
