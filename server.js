var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

var array = ['w', 'o', 'r', 'l', 'd'];

server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
  socket.emit('hello', array);
  console.log("connected");
  socket.on('button', function (data) {
    console.log(data);
  });
});
