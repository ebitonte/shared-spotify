var express = require("express");
var path = require("path");
var exphbs  = require('express-handlebars');

var NODE_PORT = 8080;

var routes = require("./routes/routes");
var users = require("./routes/users");

var app = express();

app.set("views", __dirname + "/views");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static('public'));

app.use("/", routes);
app.use("/users", users);

var server = app.listen(NODE_PORT);
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

console.log(
	"server pid %s listening on port %s",
	process.pid,
	NODE_PORT
);