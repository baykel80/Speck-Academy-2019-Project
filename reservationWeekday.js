var arr = require('./halls.js');
var luxon = require("luxon");
var reservedHalls =[];
for(var i=0;i<6;i++){
    if(arr[i].reservation.isReserved==true){
        reservedHalls.push(arr[i]);
    }
}
for(var i=0;i<6;i++){
    if(arr[i].reservation.isReserved==true){
        var date=arr[i].reservation.reservedUntil;
        var string=date.toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
        break;
    }
}
var d=new Date(2019, 2, 11, 12);
//.toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });

var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
console.log(reservedHalls);
console.log(DateTime.local(2017, 5, 15, 17, 36));
