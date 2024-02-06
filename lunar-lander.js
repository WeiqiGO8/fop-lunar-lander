angleMode(DEGREES);
//varables
let state = "start";
let gameIsRunning = true;
let buttonIsPressed = false;

//arrays
let values = [];
let keyboard = [];
let arrayObstacles = [];

//create objects
let value = {
  vehicleY: 90,
  velocity: 0.5,
  acceleration: 0.1,
  gameIsRunning: true,
};

values.push(value);

let key = {
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
  arrowLeft: 37,
  spacebar: 32,
};

keyboard.push(key);

//obstacles --> array with objects inside
//the following 5 rows of code was added courtesy of Teacher Garrit Schaap / 2024-02-06
arrayObstacles.push({
  x: 600,
  y: 430,
  draw: obstacle1,
});

arrayObstacles.push({
  x: 600,
  y: 320,
  draw: obstacle2,
});

arrayObstacles.push({
  x: 600,
  y: 560,
  draw: obstacle3,
});

//setup the canvas
function setUp() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

//create the background/scenary
function scenary() {
  push();
  noStroke();
  background(255, 255, 255);

  //the sky
  fill(200, 255, 255);
  rect(0, 0, width, height);

  //the sun
  fill(255, 255, 0);
  ellipse(580, 50, 200);

  //the ground
  fill(10, 170, 10);
  rect(0, 550, width, height);
  pop();
}

function obstacle1(x, y) {
  push();
  translate(x, y);

  //obstacle #1 - a house
  noStroke();

  //base house
  fill(200, 55, 55);
  rect(0, 0, 230, 150);

  //door
  fill(155, 120, 80);
  rect(150, 70, 50, 80);
  fill(0, 0, 0);
  ellipse(160, 110, 10);

  //window
  fill(255, 185, 0);
  rect(40, 40, 50, 50);
  stroke(0, 0, 0);
  strokeWeight(3);
  line(65, 40, 65, 90);
  line(40, 65, 90, 65);

  pop();
}

//obstacle #2
function obstacle2(x, y) {
  push();
  translate(x, y);
  noStroke();

  //base
  fill(100, 100, 100);
  rect(0, 0, 150, 260);

  //left side windows
  fill(255, 185, 0);
  rect(15, 20, 40, 40);
  rect(15, 70, 40, 40);
  rect(15, 120, 40, 40);
  rect(15, 170, 40, 40);

  //right side windows
  rect(95, 20, 40, 40);
  rect(95, 70, 40, 40);
  rect(95, 120, 40, 40);
  rect(95, 170, 40, 40);

  //door
  fill(155, 120, 80);
  rect(55, 220, 30, 40);
  fill(0, 0, 0);
  ellipse(60, 240, 6);

  pop();
}

function obstacle3(x, y) {
  push();
  translate(x, y);
  noStroke();

  //pole
  fill(85, 85, 85);
  rect(15, -300, 20, 300);

  //base
  fill(85, 85, 85);
  rect(0, 0, 50, 20);

  //light
  fill(255, 255, 0);
  ellipse(23, -320, 60);

  pop();
}

//draw the vehicle
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

function startScreen() {
  push();
  scenary();

  //start button
  rect(230, 200, 200, 80);
  text("start game", 300, 240);

  pop();
}

function gameScreen() {
  scenary();

  vehicle(80, value.vehicleY);

  if (gameIsRunning === true) {
    value.vehicleY += value.velocity;
    value.velocity += value.acceleration;

    if (keyIsDown(key.spacebar)) {
      value.velocity -= 0.5;
      value.acceleration -= 0.005;
      console.log("spacebar is pressed");
    } else if (keyIsDown(key.arrowUp)) {
      value.velocity -= 0.5;
      value.acceleration -= 0.002;
      console.log("up-arrow is pressed");
    }

    for (let obstacle of arrayObstacles) {
      console.log(obstacle);
      obstacle.draw(obstacle.x, obstacle.y);
      obstacle.x += -4;

      if (obstacle.x < -250) {
        obstacle.x = width;
      }
    }
  }
}

function resultScreen() {
  scenary();

  rect(230, 200, 100, 100);
  text("restart game", 250, 250);
}

//function to click buttons
function mouseClicked() {
  if (
    //start game button
    mouseX > 230 &&
    mouseX < 230 + 200 &&
    mouseY > 200 &&
    mouseY < 200 + 80
  ) {
    console.log("start game");
    state = "game";
  } else if (
    //restart game button
    mouseX > 230 &&
    mouseX < 230 + 100 &&
    mouseY > 200 &&
    mouseY < 200 + 100
  ) {
    console.log("restart game");
    state = "game";
  }
}

//create the draw function to make the canvas and the content visable
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    if (value.vehicleY > 500) {
      gameIsRunning = false;
      console.log("you won!");
      state = "end";
    } else if (value.vehicleY > 510) {
      gameIsRunning = false;
      state = "end";
      console.log("you crashed!");
      // state = "end";
    }
  } else if (state === "end") {
    resultScreen();
  }
}
