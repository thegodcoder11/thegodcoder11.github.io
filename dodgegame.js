 let gameRunning = true;
 
 
 
 
 let canvas = document.getElementById("game-canvas");
canvas.style.cursor = "none";

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
let obj = {
    a: 5,
    b: 7,
};
let player = {
    x: 350,
    y: 200,
    width: 5,
    height: 6,
}
let baddies = []
function updateplayerposition
    (e) {
    player.x = e.offsetX - 25
    player.y = e.offsetY - 25
    drawgame()
    let result = CheckColision(baddies[0], player)
    if (result){






    gameRunning = false
 }
}
function drawgame() {
    ctx.fillStyle =
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

if (gameRunning === false){
return;



}

    for (let i = 0; i < baddies.length; i++) {
        let obj = baddies[i]
        ctx.fillStyle = '#000'
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
    }
    ctx.fillStyle = '#a00'
    ctx.fillRect(player.x, player.y, player.width, player.height)
}
function addbaddies(x, y) {
    let baddie = { x, y, width: 22, height: 20, }
    baddies.push(baddie)
}
addbaddies(300, 50)
addbaddies(20, 40)
addbaddies(99, 199)
addbaddies(200, 222)
console.log(baddies)
canvas.addEventListener("mousemove", updateplayerposition)
let ar = [5, 7, 9]
ar.push(11)
function CheckColision(a, b) {
    if (a.x < b.x + b.width && b.x < a.x + a.width &&
        a.y < b.y + b.width && b.y < a.y + a.width
    ) {
        return true
    } else {
        return false
    }
    
}
window.addEventListener ("keydown", keydown)
function keydown (e) {

if (e.key === " " || e.key === "Enter" )
{
    gameRunning = true
}
}



drawgame ()