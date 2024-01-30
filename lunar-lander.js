//Step 0 - setup the canvas
let obstaclesX = 600;

function setUp() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

//Step 2 - Draw the scenary/background
function scenary() {
  push();
  noStroke();
  //draw the sky
  fill(200, 255, 255);
  rect(0, 0, width, height);

  //draw the ground
  fill(10, 170, 10);
  rect(0, 400, width, height);
  pop();
}

function obstacles(x, y) {
  push();
  fill(55, 55, 55);
  rect(500, 350, 100, 100);
  pop();
}

function vehicle(x, y) {
  push();
  translate(x, y);

  //color of the vehicle
  fill(255, 0, 0);
  //top of the vehicle
  rect(30, -30, 40, 40, 10);

  //base of the vehicle
  rect(0, 0, 100, 50, 10);

  //wheels
  fill(0, 0, 0);
  ellipse(10, 50, 20);
  ellipse(90, 50, 20);
  pop();
}

function draw() {
  scenary();
  obstacles(obstaclesX, 150);
  vehicle(100, 200);
}
