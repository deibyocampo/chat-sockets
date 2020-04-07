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