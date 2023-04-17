import expressHandlebars from "express-handlebars";
import express from "express";
import { __dirname } from "./__dirname.js";
import fs from "fs/promises";
import { constants } from "fs";

const handlebars = expressHandlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

const app = express();

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

app.get("/page/:page/", async (req, res) => {
  const path = __dirname + "/views/" + req.params.page + ".hbs";

  try {
    await fs.access(path, constants.F_OK);
    res.render(req.params.page);
    // or you can use
    // res.sendFile(path);
  } catch (error) {
    res.status(404).render("error");
  }
});

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(3000);
