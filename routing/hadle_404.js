import express from "express";
const app = express();

app.get("/test/:num", (req, res) => {
  let num = req.params.num;

  if (/\d+/.test(num)) {
    res.send("your num" + num);
  } else {
    res.status(404).send("page not found");
  }
});

app.use((req, res)=> {
    res.status(404).send("Page not found")
})
app.listen(3000);
