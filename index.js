import express from "express";


let app = express()

app.get("/", function(req, res) {
    res.send("helloooo")
    
})

app.listen(3000, function(){
    console.log("runing");
})