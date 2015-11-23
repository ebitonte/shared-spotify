var express = require("express");

var NODE_PORT = 8080;

var app = express();

app.get("/", function(req, res) {
	res.send("hello world");
});

app.get("/:user", function(req, res) {
	
});

app.listen(NODE_PORT);

console.log(
	"server pid %s listening on port %s",
	process.pid,
	NODE_PORT
);