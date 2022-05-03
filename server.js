const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/starbucks"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/starbucks/" }),
);

app.listen(process.env.PORT || 8080);

console.log("Server started");
console.log("http://localhost:8080");
