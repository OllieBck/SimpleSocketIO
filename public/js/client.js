var socket = io.connect('http://localhost:3000');

socket.on('connect', function(){console.log("here");});
socket.on('hello', function(data){
  console.log(data.length);
});

socket.on('disconnect', function(){});

function setup(){
  createCanvas(400, 400);
}

function draw() {
  
}
