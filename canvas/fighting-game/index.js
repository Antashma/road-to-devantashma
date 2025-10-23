const canvas = document.querySelector("canvas");
//canvass context
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
const moveSpeed = 5
const jumpSpeed = 20

class Sprite {
    constructor({ position, velocity, color, lastKey, attackColor, offset }) {
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.lastKey = lastKey;
        
        this.attackBox = {
            position: {
              x: this.position.x,
              y: this.position.y
            },
            offset,
            width: 100,
            height: 50,
            color: attackColor
        }

        this.width = 50;
        this.height = 150;

        this.isAttacking = false;

        this.health = 100;
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

        //ATTACK BOX
        c.fillStyle = this.attackBox.color;
       if (this.isAttacking) {
            c.fillRect(
                this.attackBox.position.x, 
                this.attackBox.position.y, 
                this.attackBox.width, 
                this.attackBox.height, 
            );
       }
    }

    update() {
        this.draw();
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 100);
    }
}

const player = new Sprite({
    position: {
        x: 0, 
        y: 0
    },
    velocity: {
        x: 0, 
        y: 10
    },
    color: "dodgerblue",
    lastKey: null,
    attackColor: "gold",
    offset: {
        x: 0,
        y: 0
    }
});
player.draw();

const enemy = new Sprite({
    position: {
        x: 400, 
        y: 100
    },
    velocity: {
        x: 0, 
        y: 0
    },
    color: "crimson",
    attackColor: "purple",
    offset: {
        x: -50,
        y: 0
    }
});
enemy.draw();

const keys = {
    //PLAYER
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    //ENEMY
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}

function rectangularCollision({ rect1, rect2 }) {
   return (
        rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
        rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
        rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
        rect1.attackBox.position.y <= rect2.position.y + rect2.height
    ); 
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector("#message").style.display = "flex";

    if (player.health === enemy.health) {
        document.querySelector("#message").innerHTML = "Tie!";
    } else if (player.health > enemy.health) {
        document.querySelector("#message").innerHTML = "Player 1 wins!";
    } else if (player.health < enemy.health) {
        document.querySelector("#message").innerHTML = "Player 2 wins!";
    }
}

let gameTimer = 5;
let timerId;
function decreaseTimer(){
    timerId = setTimeout(decreaseTimer, 1000);

    if (gameTimer > 0 ) {
        gameTimer--;
        document.querySelector("#timer").textContent = gameTimer;
    }

    if (gameTimer === 0) {
        determineWinner({player, enemy, timerId});
    }
}

decreaseTimer();

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;
    //PLAYER
    if (keys.a.pressed && player.lastKey === "a") {
        player.velocity.x = -moveSpeed;
    } else if (keys.d.pressed && player.lastKey === "d") {
        player.velocity.x = moveSpeed
    }

    //ENEMY
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
        enemy.velocity.x = -moveSpeed;
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
        enemy.velocity.x = moveSpeed;
    }

    //DETECT FOR PLAYER ATTACK COLLISION
    if (rectangularCollision({rect1: player, rect2: enemy}) && player.isAttacking) {
        player.isAttacking = false;
        enemy.health -= 20;
        document.querySelector("#enemy-health .current").style.width = enemy.health + "%";
    }
    //DECECT FOR ENEMY ATTACK COLLISION
    if (rectangularCollision({rect1: enemy, rect2: player}) && enemy.isAttacking) {
        console.log("enemy attack successful!");
        enemy.isAttacking = false;
        player.health -= 20;
        document.querySelector("#player-health .current").style.width = player.health + "%";
    }

    // end game based on health
    if (player.health <= 0 || enemy.health <= 0) {
        determineWinner({player, enemy, timerId})
    }
}

animate();

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        //PLAYER
        case "d":
            keys.d.pressed = true;
            player.lastKey = "d";
            break;
        case "a":
            keys.a.pressed = true;
            player.lastKey = "a";
            break;
        case "w":
            player.velocity.y = -jumpSpeed;
            break;
        case " ":
            player.attack();
            break;
        
        //ENEMY
        case "ArrowRight":
            keys.ArrowRight.pressed = true;
            enemy.lastKey = "ArrowRight";
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = "ArrowLeft";
            break;
        case "ArrowUp":
            enemy.velocity.y = -jumpSpeed;
            break;
        case "ArrowDown":
            enemy.attack();
            break;
        default:
            break;
    }
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        // PLAYER
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;

        // ENEMY
        case "ArrowRight":
            keys.ArrowRight.pressed = false;
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = false;
            break;
    
        default:
            break;
    }
})