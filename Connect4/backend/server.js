const mongoose = require("mongoose");
const express = require("express");
const app = express();

// MongoDB 연결
mongoose
  .connect("mongodb://localhost:27017/my_database", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Connect4 Game!!!");
});

app.listen(3000, () => {
  console.log("3000 포트에서 서버 실행");
});
