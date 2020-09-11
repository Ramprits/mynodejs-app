const express = require("express");
require("dotenv").config();
const app = express();
console.log(process.env.NODE_ENV);

app.get("/", (req, res, next) => {
  res.status(200).send({ name: "Ramprit Sahani" });
});

app.listen(3000);
