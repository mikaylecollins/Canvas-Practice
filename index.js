let canvas = document.getElementById("gameScreen");
//creating a rectangle and filling it
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#f00';
ctx.fillRect(20,20,100,100);
//clearing the canvas - good for gameover or moving
//ctx.clearRect(0,0,800,600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

