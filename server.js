var http = require("http");
var hall =[
    {id:1,name:"Dvorana 1",reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}},
    {id:2,name:"Dvorana 2",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 11, 10),reservedUntil:new Date(2019, 2, 11, 12)}},
    {id:3,name:"Dvorana 3",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 10, 18),reservedUntil:new Date(2019, 2, 10, 22)}},
    {id:4,name:"Dvorana 4",reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}},
    {id:5,name:"Dvorana 5",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 12, 18),reservedUntil:new Date(2019, 2, 12, 20)}},
    {id:6,name:"Dvorana 6",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 14, 18),reservedUntil:new Date(2019, 2, 14, 20)}}
    ];
var nameHalls =[];
for(var i=0;i<6;i++){
    nameHalls.push(hall[i].name);
}
var allNameHalls=nameHalls.join(",");
http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(allNameHalls);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/')
