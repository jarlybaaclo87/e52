const express = require("express");
const app = express();

//Home
app.get("/",(req, res)=>{
    res.send('Home page');
});

app.listen(3000,()=>{
    console.log("server running at port 3000");
});