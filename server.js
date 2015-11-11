var express = require("express"),
http = require("http"),
app = express(),
server = http.createServer(app),
path = require('path'),
port = 3000;
 
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
 
server.listen(port);
console.log("Escuchando el puerto" + port);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
	socket.on('send',function  (data) {
		io.sockets.emit('message', data);
	});
});