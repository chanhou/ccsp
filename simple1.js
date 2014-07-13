var http = require ('http');
var host ="127.0.0.1";

http.createServer(function(req,res){
	console.log(req.method+" "+req.url+" HTTP/"+req.httpVersion);
	console.log("host:"+host);

	res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

var body = 
'<html>'+
'<head>'+
'<title>An Example Page</title>'+
'</head>'+
'<body>'+
'Hello World, this is a very simple HTML document.'+
'</body>'+
'</html>'

res.setHeader('Content-Length', body.length);
res.end(body);

}).listen(3000,host);
