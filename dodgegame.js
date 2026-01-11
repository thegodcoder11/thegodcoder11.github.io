console.log("hello")


let canvas = document.getElementById("game-canvas");
console.log("canvasssssss");
let ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 400;
ctx.fillStyle = "rgba(255, 255, 255, 1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#789';
ctx.fillRect(50, 50, 25, 25)
ctx.fillRect(300, 300, 10, 10)
let a = 4000
function add3(i) {
    i = i + 3;
    return i;
}
let b = add3(a);
console.log(b)
let obj = {
    a: 5,
    b: 7,
};
    console.log (obj.a)

    let player = {
        x:350,
        y:200, 
    }
    ctx.fillStyle = "#1a4"
    ctx.fillRect (player.x,player.y, 50,50)
    
    ctx.fillStyle = '#a00'
function updateplayerposition
(e) {

console.log(e)
player.x = e.layerX
player.y = e.layerY
ctx.fillRect(player.x,player.y,50,50)
}


canvas.addEventListener("mousemove",updateplayerposition)