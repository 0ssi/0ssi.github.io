

let angle1 = 0;
let angle2 = 0;
let angleV1 = 0.21;
let angleV2 = 0.21;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 5);
  translate(width / 2, height / 2);
  fill(255, 0, 0, 255);
  stroke(255, 0, 0, 150);
  let ampx = (0.9 * width) / 2;
  let ampy = (0.9 * height) / 2;
  let x = map(cos(angle1), -1, 1, -ampx, ampx);
  let y = map(sin(angle2), -1, 1, -ampy, ampy);
  strokeWeight(4);
  line(0, 0, x, y);
  circle(x, y, 32);
  angle1 += angleV1;
  angle2 += angleV2;
}
