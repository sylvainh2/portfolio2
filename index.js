
const myCanvas = document.getElementById("demoCanvas");
const stage = new createjs.Stage(myCanvas);
let timerA=0;
let touche=[];
let alienArray=[];
let sens = 1;
let sensFlag = false;
let shootShip = true;
let spaceShip = false;
let shootAlien = false;
let refresh = false;
let pause = false;
let musicFlag = true;
let soundFlag = true;
let bullet, flyingSocer;
let speedBullet = 10;
let speedAlienBullet = 7;
let speedSpace = 3;
let textArray = [];
let alienBul = [];
let scTextDisplay = [];
let alienShootBullet = [];
let ship = [];

let frameR = 60;
let frameS = 60;
let frame = 1/frameS;
let y1 = 100;
let y2 = 150;
let y3 = 200;
let y4 = 250;
let y5 = 300;
let score = 0;
let level = 1;
let lives = 3;
let shootSpeed = 8000;
let timeSC;

const scoreText=[];
const liveText=[];
const levelText=[];

const music = document.querySelector("#musique");
music.volume = 0.1;
const explode = document.querySelector("#explosion");
const zap = document.querySelector("#tir");
zap.volume = 0.2;

let alien1Sprite = {
    images:["./assets/alien1.png"],
    frames:{width:60,height:45,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2],
        stand0:0,
        stand1:1
    },

};
let alien2Sprite = {
    images:["./assets/alien2.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2]
    }
};
let alien3Sprite = {
    images:["./assets/alien3.png"],
    frames:{width:60,height:45,count:2,regx:-30,regy:45},
    animations:{
        run:[0,1,"run",frame*2]
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

function Init(){

    //******************************************************************************************************//
    //                                   création de la flotte d'aliens                                     //
    //******************************************************************************************************//

    window.addEventListener("keydown",keyDown);
    window.addEventListener("keyup",keyUp);

    textDisplay(scoreText, "SCORE:", 80);
    textDisplay(levelText, "NIVEAU:", 450);
    textDisplay(liveText, "VIES:", 800);

    textArray[0].text = "SCORE:"+score;
    textArray[1].text = "NIVEAU:"+level;
    textArray[2].text = "VIES:"+lives;

    createShip(480);
    
    ennemiDisplay(positionInit);

//*******************************************************************************************************************//
//                                  mise en place de la routine principale de gestion                                //
//*******************************************************************************************************************//

    createjs.Ticker.setFPS(frameR);
    createjs.Ticker.addEventListener("tick",tickFunc);
}

function keyDown(event){
    let e = event.keyCode;
    console.log(e);
    touche[e]=true;
    if (pause && touche[80]){
        createjs.Ticker.addEventListener("tick",tickFunc);
        music.play();
    }
    if (!pause && touche[80]){
        createjs.Ticker.removeEventListener("tick", tickFunc);
        music.pause();
    }
    if(touche[80]){
        pause = !pause;
    }
    if (touche[77]){
        if (musicFlag){
            music.pause();
        } else {
            music.play();
        }
            musicFlag = !musicFlag
    }
    if (touche[83]){
            soundFlag = !soundFlag
    }
}

function keyUp(event){
    let e = event.keyCode;
    touche[e]=false;
}

function alienMove(){

    timerA += 1;
    if(timerA%(frameS/2) === 0){
        if(refresh){
            ennemiDisplay(positionInit);
            refresh = false;
            sens = 1;
            sensFlag = false;
        }
        alienArray.map((alienData)=> {
            alienData.x += (10*sens);
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
                    gameOver();
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
        if(soundFlag)zap.play();
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

function alienShootBul(xAlien,yAlien){
    const bulletAlien = new createjs.Shape();
    bulletAlien.graphics.beginFill("blue").drawRect(0,0,4,15);
    bulletAlien.x = xAlien + 28;
    bulletAlien.y = yAlien + 45;
    stage.addChild(bulletAlien);
    alienShootBullet.push(bulletAlien);
    shootAlien = true;
}

function alienBulletMove(){
    if(shootAlien){
        for(let i=0; i<alienShootBullet.length; i++){
            alienShootBullet[i].y += speedAlienBullet;
        }
    }

}

function spaceShipBuild(vaisseauMereSprite){
    if (!spaceShip){
        const spriteSheet = new createjs.SpriteSheet(vaisseauMereSprite);
        flyingSocer = new createjs.Sprite(spriteSheet,"stand");
        flyingSocer.x = 1000;
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
        if (flyingSocer.x <-60){
            spaceShip = false;
            stage.removeChild(flyingSocer);
        }
    }
}

function colisions(){
    if (!shootShip){
        for(let i = 0; i <= alienArray.length-1; i++){
            const alienData = alienArray[i];
            if ((alienData.x+5)<bullet.x && (alienData.x+40)>bullet.x && alienData.y<=bullet.y && alienData.y+25>=bullet.y){
                score += alienArray[i].scr;
                stage.removeChild(alienData);
                stage.removeChild(bullet);
                alienArray.splice(i,1);
                shootShip = true;
                textArray[0].text = "SCORE:"+score;
                if (alienArray.length === 0){
                    lives += 1;
                    level += 1;
                    textArray[1].text="NIVEAU:"+level;
                    textArray[2].text="VIES:"+lives;
                    refresh = true;

                }
            }
        }
        if (spaceShip){
            if ((flyingSocer.x+5) < bullet.x && (flyingSocer.x+65) > bullet.x && flyingSocer.y < bullet.y && flyingSocer.y+20 > bullet.y){
                let sc=0;
                if(flyingSocer.x>=370 && flyingSocer.x<=570)sc=300;
                if((flyingSocer.x>=170 && flyingSocer.x<370) || (flyingSocer.x>570 && flyingSocer.x<=770))sc=200;
                if((flyingSocer.x>=-60 && flyingSocer.x<170) || (flyingSocer.x>770 && flyingSocer.x<1000))sc=100;
                textArray[0].text = "SCORE:"+(score+sc);
                let scText = flyingSocer.x+30;
                stage.removeChild(flyingSocer);
                stage.removeChild(bullet);
                scTextDisplay = new createjs.Text(sc,"bold 12px arial","red");
                scTextDisplay.x = scText-15;
                scTextDisplay.y = 60;
                stage.addChild(scTextDisplay);
                timeSC = 0;
                score += sc;
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

function textDisplay(dataText,textLine,xData){
    dataText = new createjs.Text(textLine,"bold 20px Arial","black");
    dataText.textAlign="left";
    dataText.textBaseline="middle";
    dataText.x = xData;
    dataText.y = 20;
    stage.addChild(dataText);
    textArray.push(dataText);
}

function gameOver(){
    music.pause();
    alert("Game Over");
    reset();
}

function reset(){
    console.log("reset");
    if(musicFlag)music.play();
    score = 0;
    level = 1;
    lives = 3;
    textArray[0].text = "SCORE:"+score;
    textArray[1].text = "NIVEAU:"+level;
    textArray[2].text = "VIES:"+lives;
    ship.x = 480;
    timerA = 0;
    sens = 1;
    sensFlag = false;
    if(shootAlien){
        alienShootBullet.map((data)=>{
            stage.removeChild(data);
        })
    }
    shootAlien = false;
    if(!shootShip){
        stage.removeChild(bullet);
    }
    shootShip = true;
    alienShootBullet = [];
    if(alienArray.length>0){
        alienArray.map((data)=>{
            stage.removeChild(data);
        })
        alienArray = [];
    }
    if(touche.length>0){
        touche.map((data,index)=>{
            touche[index] = false;
        })
    }
    ennemiDisplay(positionInit);
}

function alienBulletColision(){
    if(shootAlien){
        for(let i=0; i<alienShootBullet.length; i++){
            if((alienShootBullet[i].x>ship.x && alienShootBullet[i].x<ship.x+46) && alienShootBullet[i].y>ship.y){
                lives -= 1;
                textArray[2].text="VIES:"+lives;
                waitTime();
                stage.update();
                if(lives === 0){
                    gameOver();
                }
                stage.removeChild(alienShootBullet[i]);
                alienShootBullet.splice(i,1);
                if(alienShootBullet.length===0)shootAlien = false;
            }
            else if(alienShootBullet[i].y>535){
                stage.removeChild(alienShootBullet[i]);
                alienShootBullet.splice(i,1);
                if(alienShootBullet.length===0)shootAlien = false;
            }
        }
    }

}

function alienShoot(){
    // mettre ici la fonction qui calcul shootSpeed en fonction du nb de vaisseaux restants
    alienArray.map((data)=>{
        let shoot = Math.floor(Math.random()*shootSpeed);
        if(shoot===50){
            alienShootBul(data.x,data.y);
        }

    })
}

function waitTime(){
    let shipX=ship.x;
    stage.removeChild(ship);
    if(soundFlag)explode.play();
    setTimeout(()=>{
        createShip(shipX);
    },2000);
}

function createShip(dataX){
    const spriteSheet = new createjs.SpriteSheet(vaisseauSprite);
    ship = new createjs.Sprite(spriteSheet,"stand");
    ship.x = dataX;
    ship.y = 520;
    ship.scaleX = 0.8;
    ship.scaleY = 0.7;
    stage.addChild(ship);
}

function tickFunc(){
    alienMove();
    moveBul();
    spaceShipMove();
    alienShoot();
    colisions();
    alienBulletMove();
    alienBulletColision();

    if(Math.floor(Math.random()*700)===50){
        spaceShipBuild(vaisseauMereSprite);
    }
    if(timeSC && timeSC===frameR){
        stage.removeChild(scTextDisplay);
        timeSC = null;
    }

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

    // if(touche[13]){
    //     spaceShipBuild(vaisseauMereSprite);
    // }
    // if(touche[107]){
    //     console.log(alienArray[alienArray.length-1].y);
    // }
    stage.update();
    timeSC +=1;
}

Init();