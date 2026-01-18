console.log("hello")


let canvas = document.getElementById("game-canvas");
canvas.style.cursor = "none";
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
console.log(obj.a)

let player = {
    x: 350,
    y: 200,
    width:5,
    height:6,
}



let baddies = []


function updateplayerposition
    (e) {

    console.log(e)
    player.x = e.offsetX - 25
    player.y = e.offsetY - 25
    drawgame()
}
function drawgame() {
    ctx.fillStyle =  

    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
for(let i = 0;i<baddies.length;i++){
    
}


    ctx.fillStyle = '#a00'
    ctx.fillRect(player.x, player.y, player.width, player.height)
}


function addbaddies (x,y) {

let baddie = {x,y,width:22,hieght:20,}
      
baddies.push (baddie)
}


addbaddies (300,50)
addbaddies (20,40)
addbaddies (99,199)
addbaddies(200,222)
console.log (baddies)









canvas.addEventListener("mousemove", updateplayerposition)

let ar = [5, 7, 9]
console.log(ar[1])

ar.push(11)
console.log(ar[3])

