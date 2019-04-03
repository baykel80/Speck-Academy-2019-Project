var express=require("express");
var app=express();
var arr = require('./halls.js');

app.get("/",function(req,res){
    res.send("HELLO");
});

app.use("/halls",function(req,res){
    res.json(arr);
});

app.listen(3000);