const mongoose = require("mongoose");
const express = require("express");
const app = express();

// MongoDB 연결
mongoose
  .connect(
    "mongodb+srv://ka24:xCG0Wm4N9qnaL5fH@connect4.otv5gr4.mongodb.net/test",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB와 연결되었습니다..!"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Connect4 Game!!!");
});

app.listen(3000, () => {
  console.log("3000 포트에서 서버 실행");
});
