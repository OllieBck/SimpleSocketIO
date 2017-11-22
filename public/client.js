var socket = io.connect('http://localhost:3000');

socket.on('connect', function(){console.log("here");});
socket.on('hello', function(data){
  console.log(data.length);
});

socket.on('disconnect', function(){});

function init() {
document.getElementById("button").addEventListener('click', function() {
    socket.emit('button', "pressed");
  });
}

window.addEventListener('load', init);
