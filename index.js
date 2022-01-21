let canvas = document.getElementById("gameScreen");
//creating a rectangle and filling it
let ctx = canvas.getContext('2d');
ctx.fillRect(50,50,100,100);
ctx.fillStyle = '#f00';

//clearing the canvas - good for gameover or moving
//ctx.clearRect(0,0,800,600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

