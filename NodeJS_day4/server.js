const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("../NodeJS_day4/Config/dbconfig");
const taskRoutes = require("./Routes/taskRoutes");

const app = express();

// app.use(express.json());
app.use(bodyParser.json());


dbConnect();
// if(dbConnect()) {
//   console.log("true");
// }

app.use("/", taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
