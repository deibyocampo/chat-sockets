var express = require('express');
var app = express();
var server = require('http').Server(app);
/* create socket */
var io = require('socket.io')(server);

/* create route */
app.get('/hola-mundo', function(req, res){
	res.status(200).send('hola mundo desde una ruta');
});

/* Conection Socket */
io.on('conection', function(){
	console.log();
});

/* create server */
server.listen(6677, function(){
	console.log('server works in http://localhost:6677');
});