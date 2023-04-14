import express from "express";
const app = express();

let users = [
  {
    name: "Liza",
    age: 31,
  },
  {
    name: "Olexiy",
    age: 32,
  },
  {
    name: "Inna",
    age: 33,
  },
];

app.get("/users/:id/:info?/", (req, res) => {
  let user = users[req.params.id];
  if (user) {
    res.send("user name: " + user.name + " " + "user age: " + user.age);
  } else {
    res.status(404).send("We can not find this page");
  }
});

app.use((req, res) => {
  res.status(404).send("We can not find this page");
});

app.listen(3000);
