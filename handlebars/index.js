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

app.use(express.static(__dirname + "/views/"));

app.get("/page/:page/", async (req, res) => {
  const path = __dirname + "/views/" + req.params.page + ".hbs";

  try {
    await fs.access(path, constants.F_OK);
    res.render(req.params.page, {
      text1: "aaaa",
      text2: "https://www.youtube.com/watch?v=wlsX-PpVvGU",
      text3: "../img.png", // this is a relative path to route that we created - /page/:page/.
      //So we even do not have this folders in our derictory. We just write this path relativ eroot derictory
      // absolute path "/img.png"
    });

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

//  27 line explanation:
//   ../img.png  -  this is a relative path to route that we created - /page/:page/.
// So we even do not have this folders in our derictory. We just write this routh and we have to remember that / in /page/:page/ means root
// derictory. Our root derictory is /views/ like we define 17 line.

//  Absolute path will be "/img.png". / - it is root derictory (/views/), and img.png is in root derictory.
