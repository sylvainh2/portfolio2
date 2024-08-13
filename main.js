const stage = new createjs.Stage("demoCanvas");
const playerSpeed = 10;
const bulletSpeed = 10;
const enemySpeed = 5;
const enemies = [];
const bullets = [];
let timerA = 0;
let sens = 1;
let sensFlag = false;

function init() {
    createjs.Ticker.framerate=100;
    createjs.Ticker.addEventListener("tick", handleTick);

    const player = new createjs.Shape();
    player.graphics.beginFill("blue").drawRect(0, 0, 50, 30);
    player.x = stage.canvas.width / 2 - 25;
    player.y = stage.canvas.height - 40;
    player.name = "player";
    stage.addChild(player);

    spawnEnemies();

    window.addEventListener("keydown", handleKeyDown);
}

function handleTick(event) {
    moveBullets();
    moveEnemies();
    checkCollisions();
    stage.update(event);
}

function handleKeyDown(event) {
    const player = stage.getChildByName("player");

    if (event.key === "ArrowLeft") {
        player.x -= playerSpeed;
    } else if (event.key === "ArrowRight") {
        player.x += playerSpeed;
    } else if (event.key === " ") {
        shootBullet(player.x + 25, player.y);
    }
}

function shootBullet(x, y) {
    const bullet = new createjs.Shape();
    bullet.graphics.beginFill("red").drawRect(0, 0, 5, 10);
    bullet.x = x - 2.5;
    bullet.y = y - 10;
    bullets.push(bullet);
    stage.addChild(bullet);
}

function moveBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.y -= bulletSpeed;

        if (bullet.y < 0) {
            stage.removeChild(bullet);
            bullets.splice(i, 1);
        }
    }
}

function spawnEnemies() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            const enemy = new createjs.Shape();
            enemy.graphics.beginFill("green").drawRect(0, 0, 40, 20);
            enemy.x = j * 45 + 30;
            enemy.y = i * 35 + 30;
            enemies.push(enemy);
            stage.addChild(enemy);
        }
    }
}

function moveEnemies() {
    timerA += 1;
    if(timerA%10 === 0){
        for (const enemi of enemies) {
            enemi.x += (enemySpeed*sens);
            if (enemi.x > (stage.canvas.width-60) || enemi.x < 20){
                if(!sensFlag){
                    sensFlag = true;
                }
            }
        }
        if(sensFlag){
            for (const enemy of enemies) {
                enemy.y += enemySpeed;
                
                if (enemy.y > (stage.canvas.height-20)) {
                    // Game Over
                    createjs.Ticker.removeEventListener("tick", handleTick);
                    alert("Game Over");
                    return;
                }
            }
            sens *= (-1);
            sensFlag = false;
        }
        timerA = 0;
    }
}

function checkCollisions() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];

        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];

            if (bullet.x < enemy.x + 40 && bullet.x + 5 > enemy.x && bullet.y < enemy.y + 20 && bullet.y + 10 > enemy.y) {
                stage.removeChild(bullet);
                stage.removeChild(enemy);
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                break;
            }
        }
    }
}

init();
