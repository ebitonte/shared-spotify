var socket = io();

socket.on('news', function(data) {
	var $newDiv = $("<div>"+data.hello+"</div>");
	$("#data").append($newDiv);
	socket.emit('my other event', {my: data});
});