var express=require("express");
var app=express();
var arr = require('./halls.js');
var duljina=arr.length;

app.use(express.static('public'));
app.get("/",function(req,res){
    res.send("HELLO");
});

app.use("/halls",function(req,res){
    res.json(arr);
});
app.use(express.urlencoded());
app.post("/hallsCreate",function (req,res){
    const formName = req.body.hallName;
    arr[arr.length]={id:arr.length+1,name:formName,reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}};
    res.redirect("/halls");
});
app.post("/hallsUpdate",function (req,res){
    var reservation=false;
    var date=new Date();
    if(req.body.isReserved=="isReserved"){
        reservation=true;
    }
    for(var i=0;i<req.body.ID;i++){
        if(arr[i].id==req.body.ID){
            arr[i].reservation.isReserved=reservation;
            arr[i].reservation.reservedFrom=date;
            arr[i].reservation.reservedUntil=req.body.reservedUntil;
            break;
        }
    }
    res.redirect("/halls");
});
app.post("/hallsDelete",function (req,res){
    for(var i=0;i<arr.length;i++){
        if(arr[i].id==req.body.ID){
        arr.splice(i,1);
        break;
        }
    }   
    res.redirect("index.html");
});
app.listen(3000);
