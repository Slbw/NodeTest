var http = require("http");
 
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("<h1>heiheihei</h1>");
  res.end("<p>good</p>");
}).listen(80);
console.log("Http server is listening at port 80");
