const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Connect4 Game!!!");
});

app.listen(3000, () => {
  console.log("3000 포트에서 서버 실행");
});