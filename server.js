const express = require("express");
const app = express();
//---set the view engine
app.set("view engine","ejs");

//Home
app.get("/",(req, res)=>{
    //use res.render to send file
    res.render('index');
});

app.listen(3000,()=>{
    console.log("server running at port 3000");
});