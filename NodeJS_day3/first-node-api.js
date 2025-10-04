const http = require("http"); //import http module
require("dotenv").config(); //import env module
//set port from env or default to 1337 using npm i dotenv
const port = process.env.PORT || 1337;

//create server
const server = http.createServer((req, res) => {
  if(req.url === '/') {
    HTMLReq(req,res);
  } else {
    if (req.url === '/json') {
      JSONReq(req,res);
    }
    else {
      NotfoundReq(req,res);
    }
  }
});

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


//start serve
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
