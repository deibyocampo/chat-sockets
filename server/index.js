var express = require('express');
var app = express();
var server = require('http').Server(app);
/* create socket */
var io = require('socket.io')(server);

/* loader middleware */
app.use(express.static('client'));

/* create route */
app.get('/hola-mundo', function(req, res){
	res.status(200).send('hola mundo desde una ruta');
});

/* data */
var messages = [{
	id: 1,
	text: 'Bienvenido al chat privado',
	nickname: 'messages'
}];

/* Conection Socket */
io.on('connection', function(socket) {
	console.log("el cliente con ip: "+socket.handshake.address+"se ha conectado");
	socket.emit('messages', messages);

	socket.on('add-message', function(data){
		messages.push(data);

		io.sockets.emit('messages', messages);
	});
});


/* create server */
server.listen(6677, function(){
	console.log('server works in http://localhost:6677');
});