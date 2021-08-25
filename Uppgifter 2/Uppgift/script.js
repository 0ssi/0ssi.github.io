let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;

let speed = 2.5;

canvas.width = window.innerHeight - 2;
canvas.height = window.innerHeight - 2;

class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }
    draw = function(){
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.w, this.h, this.color)
    }
}

player1 = new Box(10, 550, 50, 50, "pink")

ground = new Box(0, canvas.height - 50, canvas.width, 50, "green")

Box = new Box(250, 250, 75, 75, "blue")

setInterval(gameLoop, 1)

function gameLoop(){

    context.clearRect(0, 0, canvas.width, canvas.height)
    Box.draw()
    player1.draw()
    ground.draw()
    move()
    checkWalls()

}

function move(){

    if(keyD == true){
        player1.x += speed
    }
    if(keyA == true){
        player1.x -= speed
    }
    if(keyW == true){
        player1.y -= speed
    }
    if(keyS == true){
        player1.y += speed
    }

}

function checkWalls(){

    if(player1.x + player1.w > canvas.width){player1.x = canvas.width - player1.w}
    if(player1.x < 0){player1.x = 0}

    if(player1.y + player1.h > canvas.height){player1.y = canvas.height - ground.h}
    if(player1.y < 0){player1.y = 0}

    if(player1.y + player1.h > ground.y){player1.y = ground.y - player1.h}

    if(player1.y + player1.h > Box.y && player1.x + player1.w > Box.x && player1.y < Box.y + Box.h && player1.x < Box.x + Box.w  ){
        console.log("yes")
    }

}

window.addEventListener("keydown", onkeydown)
function onkeydown(e){
    if(e.key == "d"){
        keyD = true;
    }
    if(e.key == "s"){
        keyS = true;
    }
      if(e.key == "a"){
        keyA = true;
    }
    if(e.key == "w"){
        keyW = true;
    }
}

window.addEventListener("keyup", onkeyup)
function onkeyup(e){
    if(e.key == "d"){
        keyD = false
    }
    if(e.key == "s"){
        keyS = false
    }
    if(e.key == "a"){
        keyA = false
    }
    if(e.key == "w"){
        keyW = false
    }
}

