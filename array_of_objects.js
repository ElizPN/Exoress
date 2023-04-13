import express from "express";

const app = express();

let prods = [
  {
    name: "prod1",
    cost: 1000,
  },
  {
    name: "prod2",
    cost: 2000,
  },
  {
    name: "prod3",
    cost: 3000,
  },
];

app.get("/prods/", (req, res) => {
  let result = "<ul>";
  for (const item of prods) {
    result += "<li>" + item.name + " " + item.cost + "</li>";
  }
  result += "</ul>";

  res.send(result);
});
app.listen(3000, () => {
  console.log("running prods");
});
