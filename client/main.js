var socket = io.connect('http://localhost:6677',{'forceNew':true});

socket.on('messages', function(data) {
	console.log(data);
	render(data);
});

function render(data){
	let html = data.map(function(messages, index){
		return (`
			<div class="messages">
				<strong>${messages.nickname}</strong>
				<p>${messages.text}</p>
			</div>	
		`);
	}).join('');

	document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
	let datas = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('text').value
	};

	document.getElementById('nickname').style.display = 'none';
	socket.emit('add-message', datas);
	return false;
}
