import express from "express";

const app = express();

let users = ["user1", "user2", "user3", "user4", "user5"];

app.get("/users/", (req, res) => {
  let result = "<ul>";
  for (const user of users) {
    result += "<li>" + user + "</li>";
  }
  result += "</ul>";
  res.send(result);
});

app.listen(3000, () => {
  console.log("array.js file is running");
});
