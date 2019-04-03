var express=require("express");
var app=express();
var arr = require('./halls.js');

app.use("/halls",function(req,res){
    res.json(arr);
});

app.listen(3000);