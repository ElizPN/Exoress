import express from "express";
const app = express();

app.get("/test/:num1/:num2", (req, res) => {
  const number1 = parseInt(req.params.num1);
  const number2 = parseInt(req.params.num2);
  let sum = number1 + number2;
  sum = sum.toString();

  res.send(sum);
});

app.listen(3000);
