let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth
canvas.height = window.innerHeight



let c = canvas.getContext("2d")


//line



//c.beginPath();
//c.moveTo(50, 300);    
//c.lineTo(300, 100)
//c.lineTo(400, 300)
//c.strokeStyle = "hotpink"
//c.stroke();



//arch / circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false );
//c.strokeStyle = "blue";
//c.stroke()

//for (let i = 0; i < 1; i++) {
    //let x = Math.random() * window.innerWidth;
    //let y = Math.random() * window.innerHeight;
    //c.beginPath();
//c.arc(200, 200, 30, 0, Math.PI * 2, false );
//c.strokeStyle = "blue";
//c.stroke();
//}





let mouse =  {
    x: undefined,
    y: undefined
}

let maxRadius = 40;
let minRadius = 2;

let colorArray = [
    "#0D0D0D",
    "#730202",
    "#F23D6D",
    "#F21B42",
    "#D90416",
];

window.addEventListener("mousemove", 
    function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
    })

    window.addEventListener("resize", function()
        {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            
    })
    

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];



    

    this.draw = function(){
        c.beginPath();

        

        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color
        c.stroke()
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || 
            this.x - this.radius < 0) {
            this.dx = -this.dx
        }
    
        if (this.y + this.radius > innerHeight || 
            this.y - this.radius < 0){
            this.dy = -this.dy
        }
    
        this.x += this.dx;
        this.y += this.dy;

    
        if (mouse.x - this.x < 50 && mouse.x
            -this.x > -50
            && mouse.y -this.y < 50 && mouse.y - this.y > -50
            
            ) {
            if (this.radius < maxRadius){
                this.radius += 1;
            }    
            

        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }

    
}


let circleArray = [];

for (let i = 0; i < 1200; i++){
    let radius = Math.random() * 3 + 1;    
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5); 
    let dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius))


    

}
console.log(circleArray)


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();