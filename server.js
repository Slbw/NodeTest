var http = require("http");
 
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("<h1>Nodejs demo one</h1>");
  res.end("<p>Hello World2</p>");
}).listen(80);
console.log("Http server is listening at port 80");
