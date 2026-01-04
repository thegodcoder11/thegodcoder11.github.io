console.log("hello")


let canvas = document.getElementById("game-canvas");
console.log("canvasssssss");
let ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;
ctx.fillStyle = "rgba(255, 255, 255, 1)"; 
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = '#789';
ctx.fillRect(50,50,25,15)