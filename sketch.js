let circleDiameter =50;;
let xPos = circleDiameter / 2;
let yPos = circleDiameter / 2;
a = 0;
b = 255;
c = 0;
x = 0;
y = 0;
z = 255;
n = .1;
speed = 10;


function setup() {
  createCanvas(900, 400);
}

function draw() {
  background(155);

  circle(xPos, yPos, circleDiameter);
  xPos = xPos + speed;


  fill(a, b, c)
  stroke(x, y, z);
  strokeWeight(n)
  if (xPos >= width + circleDiameter / 2) {
    xPos = -circleDiameter / 2;
    yPos = random(0, 400);
    a = random(0, 255);
    b = random(0, 255);
    c = random(0, 255);
    x = random(0, 255);
    y = random(0, 255);
    z = random(0, 255);
    n = random(0, 10);
    circleDiameter = random(10, 200)
    speed = random(1, 25);
  }
}