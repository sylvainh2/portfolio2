
const myCanvas = document.getElementById("demoCanvas");
const stage = new createjs.Stage(myCanvas);
let tickHandler;
let timerA=0;
let multi=1;
let touche=[];
let alienArray=[];
let sens = 1;
let sensFlag = false;
let shootShip = true;
let spaceShip = false;
let bullet, flyingSocer;
let speedBullet = 5;
let speedSpace = 1;
let textArray = [];

let frame = 1/60;
let frameR = 60;
let y1 = 100;
let y2 = 150;
let y3 = 200;
let y4 = 250;
let y5 = 300;
let score = 0;
let level = 1;
let lives = 3;

const contScore=[];
const contLive=[];
const contLevel=[];
const scoreText=[];
const liveText=[];
const levelText=[];


let alien1Sprite = {
    images:["./assets/alien1.png"],
    frames:{width:60,height:45,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame],
        stand0:0,
        stand1:1
    },

};
let alien2Sprite = {
    images:["./assets/alien2.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame]
    }
};
let alien3Sprite = {
    images:["./assets/alien3.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame]
    }
};
let vaisseauSprite = {
    images:["./assets/vaisseau.png"],
    frames:{width:60,height:35,regx:-30,regy:0},
    animations:{
        stand:0
    }
};
let vaisseauMereSprite = {
    images:["./assets/vaisseaumere.png"],
    frames:{width:80,height:40,regx:-40,regy:40},
    animations:{
        stand:0
    }
};

const positionInit=[
    {
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien1Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y1,
        "scr" : 40
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y2,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien2Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y3,
        "scr" : 20
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y4,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 20,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 80,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 140,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 200,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 260,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 320,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 380,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 440,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 500,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 560,
        "y" : y5,
        "scr" : 10
    },{
        "src" : alien3Sprite,
        "stage" : "run",
        "x" : 620,
        "y" : y5,
        "scr" : 10
    }
]


// window.addEventListener('load', Init);

function Init(){

    //******************************************************************************************************//
    //                                   création de la flotte d'aliens                                     //
    //******************************************************************************************************//
    let ship;

    window.addEventListener("keydown",keyDown);
    window.addEventListener("keyup",keyUp);

    textDisplay(contScore, scoreText, "SCORE:", 80);
    textDisplay(contLevel, levelText, "NIVEAU:", 450);
    textDisplay(contLive, liveText, "VIES:", 800);

    textArray[0].text = "SCORE:"+score;
    textArray[1].text = "NIVEAU:"+level;
    textArray[2].text = "VIES:"+lives;

    ennemiDisplay(positionInit);

    const spriteSheet = new createjs.SpriteSheet(vaisseauSprite);
    ship = new createjs.Sprite(spriteSheet,"stand");
    ship.x = 480;
    ship.y = 520;
    ship.scaleX = 0.8;
    ship.scaleY = 0.7;
    stage.addChild(ship);

//*******************************************************************************************************************//
//                                  mise en place de la routine principale de gestion                                //
//*******************************************************************************************************************//

    createjs.Ticker.useRAF=true;
    createjs.Ticker.framerate = frameR;
    createjs.Ticker.addEventListener("tick",()=>
    {
        alienMove();
        moveBul();
        spaceShipMove();
        colisions();

        if (touche[37]){
            ship.x -= 5;
            if (ship.x<10) ship.x = 10;
        }
        if (touche[39]){
            ship.x += 5;
            if (ship.x > 940) ship.x = 940;
        }
        if (touche[32]){
            shootBul(ship.x+25);
        }
        if(touche[13]){
            spaceShipBuild(vaisseauMereSprite);
        }
        if(touche[107]){
            console.log(alienArray[alienArray.length-1].y);
        }
        stage.update();
    })
    
}

function stopAnimation (){
    // Remove the tick handler
    createjs.Ticker.removeEventListener("tick", tickHandler);

    // Clear the stage
    stage.removeAllChildren();
    
    // Optional: clear the canvas
    var canvas = stage.canvas;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Clean up the stage
    stage.enableDOMEvents(false);
    stage = null;
    for(let w=0;w<11;w++){
        sprite[w] = null;
        
    }
    stage.update();
}

function alienRemover(){
    let position = Math.floor(Math.random()*alienArray.length);
    stage.removeChild(alienArray[position]);
    alienArray.splice(position,1);
}

function keyDown(event){
    let e = event.keyCode;
    console.log(e);
    touche[e]=true;
}

function keyUp(event){
    let e = event.keyCode;
    touche[e]=false;
}

function alienMove(){

    timerA += 1;
    if(timerA%frameR === 0){
        alienArray.map((alienData)=> {
            alienData.x += (5*sens);
            if (alienData.x > (stage.canvas.width-60) || alienData.x < 20){
                if(!sensFlag){
                    sensFlag = true;
                }
            }
        })
        if(sensFlag){
            alienArray.map((alienDat)=> {
                alienDat.y += 15;
                
                if (alienDat.y > 490) {
                    // Game Over
                    createjs.Ticker.removeEventListener("tick");
                    alert("Game Over");
                    return;
                }
            })
            sens *= (-1);
            sensFlag = false;
        }
        timerA = 0;
    }
    
}

function shootBul(x){
    if(shootShip){
        bullet = new createjs.Shape();
        bullet.graphics.beginFill("red").drawRect(0, 0, 4, 10);
        bullet.x = x - 2;
        bullet.y = 510;
        stage.addChild(bullet);
        shootShip = false;
    }
}

function moveBul(){
    if(!shootShip){
        bullet.y -= speedBullet;
        if (bullet.y < 50){
            shootShip = true;
            stage.removeChild(bullet);
        }
    }
}

function alienShootBul(){

}

function moveAlienBul(){

}

function spaceShipBuild(vaisseauMereSprite){
    if (!spaceShip){
        const spriteSheet = new createjs.SpriteSheet(vaisseauMereSprite);
        flyingSocer = new createjs.Sprite(spriteSheet,"stand");
        flyingSocer.x = 900;
        flyingSocer.y = 50;
        flyingSocer.scaleX = 0.8;
        flyingSocer.scaleY = 0.7;
        stage.addChild(flyingSocer);
        spaceShip = true;
    }
}

function spaceShipMove(){
    if (spaceShip){
        flyingSocer.x -= speedSpace;
        if (flyingSocer.x <10){
            spaceShip = false;
            stage.removeChild(flyingSocer);
        }

    }

}

function colisions(){
    if (!shootShip){
        for(let i = 0;i <= alienArray.length-1; i++){
            const alienData = alienArray[i];
            if ((alienData.x+5)<bullet.x && (alienData.x+40)>bullet.x && alienData.y<=bullet.y && alienData.y+25>=bullet.y){
                score += alienArray[i].scr;
                stage.removeChild(alienData);
                stage.removeChild(bullet);
                alienArray.splice(i,1);
                shootShip = true;
                textArray[0].text = "SCORE:"+score;
                console.log("longueur:"+alienArray.length);
                if (alienArray.length === 0){
                    lives += 1;
                    level += 1;
                    textArray[1].text="NIVEAU:"+level;
                    textArray[2].text="VIES:"+lives;

                    ennemiDisplay(positionInit);
                }
            }
        }
        if (spaceShip){
            console.log(spaceShip,flyingSocer.x,flyingSocer.y,bullet.x,bullet.y);
            if ((flyingSocer.x+5) < bullet.x && (flyingSocer.x+65) > bullet.x && flyingSocer.y < bullet.y && flyingSocer.y+20 > bullet.y){
                stage.removeChild(flyingSocer);
                stage.removeChild(bullet);
                shootShip = true;
                spaceShip = false;
            }
        }

    }

}

function ennemiDisplay(positionInit){
    for(let i=0; i<positionInit.length;i++){
        const spriteSheet=new createjs.SpriteSheet(positionInit[i].src);
        const alien=new createjs.Sprite(spriteSheet,positionInit[i].stage);
        alien.x=positionInit[i].x;
        alien.y=positionInit[i].y;
        alien.scr = positionInit[i].scr;
        alien.scaleX=0.8;
        alien.scaleY=0.7;
        alienArray.push(alien);
        stage.addChild(alien);
    };
}

function textDisplay(dataText,dataCont,textLine,xData){
    dataCont = new createjs.Container();
    dataText = new createjs.Text(textLine,"bold 20px Arial","black");
    dataText.textAlign="left";
    dataText.textBaseline="middle";
    dataCont.x = xData;
    dataCont.y = 20;
    dataCont.addChild(dataText);
    stage.addChild(dataCont);
    textArray.push(dataText);
}

Init();
export default Init();