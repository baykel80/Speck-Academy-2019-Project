var arr = require('./halls.js');
var _ = require('lodash');
var nameHalls =[];
for(var i=0;i<6;i++){
    nameHalls.push(arr[i].name);
}

var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
console.log(_.uniqBy(arr, 'name'));
console.log(nameHalls.join(","));