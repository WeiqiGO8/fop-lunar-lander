//Step 0 - setup the canvas
function setUp() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

//Step 1 - Draw the scenary/background
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

//step 2 - Draw the obstacles

function obstacles(x, y) {
  push();
  fill(55, 55, 55);
  rect(500, 300, 100, 100);
  pop();
}

//step 3 - Draw the vehicle
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

let obstaclesX = 600;
let vehicleY = 100;
let velocity = 0.2;
let acceleration = 0.09;
let gameIsRunning = true;

function draw() {
  scenary();
  obstacles(obstaclesX, 150);
  vehicle(100, vehicleY);
}
