 
 const CONFIG = {
    assets: {
        background:document.getElementById ("background-img"),
        player:document.getElementById ("me-img"),
        baddie:document.getElementById ("baddies-img"),

    },
    canvas:{
    width: 726*0.8,
    height:628*0.8,
    }




 };
 
 class GameController {
    //properties    
    gameRunning = true;
    
    //constructors
    constructor() {
        
        this.addbaddies(300, 50)
        this.addbaddies(20, 40)
        this.addbaddies(99, 199)
        this.addbaddies(200, 222)
        gameV.canvas.addEventListener("mousemove", this.updateplayerposition)
        
        gameV.canvas.style.cursor = "none";
        gameV.restartButton.addEventListener("click", () => {
            this.gameRunning = true
            gameV.drawgame()
            gameV.canvas.style.cursor = "none";
        })
        window.addEventListener("keydown", this.keydown)
    }
    //methods
    addbaddies(x, y) {
        let baddie = {
            x,y, 
            width:33,
            height:33,

        }
        gameM.baddies.push(baddie) 
    }

    updateplayerposition = (e) => {
        gameM.player.x = e.offsetX - 25
        gameM.player.y = e.offsetY -  25  
             this.CheckAllBaddies()
        gameV.drawgame()
    }
    
    CheckAllBaddies() {
        for (let i = 0; i < gameM.baddies.length; i++) {
            
            let result = this.CheckColision(gameM.baddies[i], gameM.player)
            if (result) {
    
                this.gameRunning = false;
                gameV.canvas.style.cursor = 'default';
                
            }
        }
    }
    
    CheckColision(a, b) {
        if (a.x < b.x + b.width && b.x < a.x + a.width &&
            a.y < b.y + b.width && b.y < a.y + a.width
        ) {
            return true
        } else {
            return false
        }
        
    }

    keydown = (e) => {
    
        if (e.key === " " || e.key === "Enter") {
            this.gameRunning = true
        }
    }
}

class GameView {
    //properties
    canvas;
    ctx;
    restartButton = document.getElementById("restartButton");
//constructor
    constructor() {
        this.canvas = document.getElementById("game-canvas");

        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = CONFIG.canvas.width;
        this.canvas.height = CONFIG.canvas.height;
        this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
        this.ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#789';
        this.ctx.fillRect(50, 50, 25, 25);
        this.ctx.fillRect(300, 300, 10, 10);
    }
    //methods
    drawgame() {
        //this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
       // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
       this.ctx.drawImage (CONFIG.assets.background,0,0,CONFIG.canvas.width,CONFIG.canvas.height)
    
        if (gameC.gameRunning === false) {
            return;

            
            
        }

        for (let i = 0; i < gameM.baddies.length; i++) {
            let obj = gameM.baddies[i]
        //  this.ctx.fillStyle = '#000'
        //  this.ctx.fillRect(obj.x, obj.y, obj.width, obj.height)

this.ctx.drawImage (CONFIG.assets.baddie,obj.x, obj.y, obj.width, obj.height )


        }
        //this.ctx.fillStyle = '#a00'
        //this.ctx.fillRect(gameM.player.x, gameM.player.y, gameM.player.width, gameM.player.height)
    

this.ctx.drawImage (CONFIG.assets.player,gameM.player.x+gameM.player.drawX, gameM.player.y+gameM.player.drawY, gameM.player.drawWidth, gameM.player.drawHeight)        


    }

    
}

class GameModel{    
     player = {
        x: 350,
        y: 200,
        width: 30,
        height: 20,
         drawWidth:60,
         drawHeight:50,
         drawX:-15,
         drawY:-15,
    }
    baddies = []
}

let gameM = new GameModel();
let gameV = new GameView();
let gameC = new GameController();

gameV.drawgame();