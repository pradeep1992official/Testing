const express = require("express");
require("dotenv").config();

const app = express();

const port  = process.env.PORT || 1337;

app.get("/", HTMLReq);
app.get("/json", JSONReq);
app.get("*", NotfoundReq);

function JSONReq(req, res) {
  res.setHeader("Content-Type", "application/JSON"); //set header
  res.end(
    JSON.stringify({
      message: "Hello World",
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    })
  ); //response only string allowed, if json format,  use json.stringify()
}

function HTMLReq (req, res) {
  res.setHeader("Content-Type", "Text/plain");
  res.end("Hello World");
}

function NotfoundReq(req,res) {
  res.writeHead(404 , {'Content-Type' : 'text/plain'})
  res.end("404 Not found");
}

app.listen(port,()=>{ 
  console.log(`http://localhost:${port}`);
})

