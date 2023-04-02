require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

var cors = require('cors')

const port = 3001;

const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors())

// connect to mongodb

//  using mongoose@6.10.0 temporarily to fix error - https://stackoverflow.com/a/75638135
mongoose.connect(
  "mongodb://localhost:27017/reciperoulette",
  {
    useNewUrlParser: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to mongodb");
    }
  }
);

//   available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/gpt", require("./routes/gpt"));
app.use("/api/blog", require("./routes/blog"));


app.listen(port, function () {
  console.log("listening on port" + port);
});
