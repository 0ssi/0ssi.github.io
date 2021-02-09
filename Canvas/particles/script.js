const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)

}

window.addEventListener("mousemove",
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

    }
);

class Particle {
    constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "red"
        ctx.fill();

    }

    update() {
        if (this.x > canvas.width || this.x < 0 ) {
            this.dx = - this.dx;
        }

        if (this.y > canvas.height || this.y < 0) {
            this.dy = -this.dy;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size *5) {
                this.x += 5;
            }

            if (mouse.x > this.x && this.x > this.size * 5) {
                this.x -= 5;
            }

            if (mouse.y < this.y && this.y < canvas.height - this.size *5) {
                this.y += 5;
            }

            if (mouse.y > this.y && this.y > this.size * 5){
                this.y -= 5;
            }
        }

        this.x += this.dx;
        this.y += this.dy
        this.draw();

    }
}  

function init() {
    particleArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 3000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size *2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size *2) - (size * 2)) + size * 2);
        let dx = (Math.random () * 2) - 1;
        let dy = (Math.random () * 2) - 1;
        let color = "red";
        
        particleArray.push(new Particle(x, y, dx, dy, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
    connect();
}

function connect() {
    let opacityValue = 3;
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let distance = (( particleArray [a].x - particleArray[b].x)
            * (particleArray[a].x - particleArray[b].x))
            + ((particleArray [a].y - particleArray[b].y) *
            (particleArray[a].y - particleArray[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 0.8 - (distance / 15000);
                ctx.strokeStyle='rgba(255, 0, 50,' + opacityValue + ')';
                ctx.lineWidth= 0.5;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
                
            }

        }
    }
}

window.addEventListener("resize",
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
        init();
    }    
);

window.addEventListener("mouseout",
    function() {
        mouse.x = undefined;
        mouse.y = undefined;
    }
)

init();
animate();



