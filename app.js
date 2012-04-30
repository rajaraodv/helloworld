var http = require('http');
var port = process.env.VCAP_APP_PORT || '3000';
var host = process.env.VCAP_APP_HOST || 'localhost';
http.createServer(function(req, res){
	res.end('Hello World! I am running on..' + host +":"+ port);	
}).listen(port, host);