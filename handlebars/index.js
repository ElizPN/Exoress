import expressHandlebars from "express-handlebars";

const handlebars = expressHandlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

import express from "express";
const app = express();

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

app.get("/page/:page/", (req, res) => {
  res.render(req.params.page);
});

app.listen(3000);
