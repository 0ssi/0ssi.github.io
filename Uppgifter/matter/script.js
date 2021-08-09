let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;
Bodies = Matter.Bodies;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1200,
        height: 600,
        wireframes: false,
    }
});

let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
});
render.mouse = mouse;

let ground = Bodies.rectangle(400, 610, 820, 60, { isStatic: true });
let leftWall = Bodies.rectangle(0, 300, 60, 820, { isStatic: true });
let rightWall = Bodies.rectangle(800, 300, 60, 820, { isStatic: true });
let triangle = Bodies.polygon(400, 545, 3, 60, { isStatic: true, angle: -0.49999 });
let plank = Bodies.rectangle(400, 480, 450, 15, { isStatic: false}); 
let box1 = Bodies.rectangle(200, -100, 180, 180, { isStatic: false });
let cube = Bodies.rectangle(570, 395, 30, 30, { isStatic: false});


box1.mass = 3.6;


let link = Matter.Constraint.create({
    bodyA: plank, bodyB: triangle, pointB: {
        x: 0 , y: -60
    }, pointA: {
        x: 0 , y: 5
    }
})


World.add(engine.world, [ground, box1, leftWall, mouseConstraint, rightWall, triangle, plank, cube, link]);

Engine.run(engine);

Render.run(render);

console.log(box1);



let lastTime = 0;
let fps = 0;

requestAnimationFrame(GameLoop);

function GameLoop(currentTime) {
    requestAnimationFrame(GameLoop);

    fps = (currentTime - lastTime) / 1000;


    if (fps < 0.05) return;
    lastTime = currentTime;

    update();
}

function update() {

}

function a() {
    console.log(box1);
}


//window.addEventListener("keypress", (eve) => {
    //if (eve.key == "d") {
    //    box1.force.x += 0.05;
    //}
    //if (eve.key == "a") {
    //    box1.force.x += -0.05;
    //}
    //if (eve.key == "w") {
    //    box1.force = { x: 0, y: -0.1 };
    //}
//});

let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
]
let geycolor = 0;

setInterval(() => {
    if (geycolor > colors.length - 1) geycolor = 0;
    box1.render.fillStyle = colors[geycolor];
    geycolor++;
}, 500);