angleMode(DEGREES);
//varables
let state = "start";
let timer = 4;
//arrays
let arrayObstacles = [];

//create objects
let value = {
  vehicleY: 90,
  vehicleX: 80,
  vehicleDirection: 0,
  friction: -0.1,
  velocity: 0.5,
  acceleration: 0.1,
};

let key = {
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
  arrowLeft: 37,
  spacebar: 32,
};

// obstacles --> array with objects inside
// the following 5 rows of code was added courtesy of Teacher Garrit Schaap / 2024-02-06
arrayObstacles.push({
  x: Math.floor(Math.random() * 2000),
  y: 430,
  draw: obstacle1,
});

arrayObstacles.push({
  x: Math.floor(Math.random() * 2000),
  y: 320,
  draw: obstacle2,
});

arrayObstacles.push({
  x: Math.floor(Math.random() * 2000),
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
  rect(175, 200, 230, 60);
  textSize(20);
  text("Start Game", 235, 235);

  pop();
}

function gameScreen() {
  scenary();

  if (state === "game") {
    //obstacle random x
    for (let obstacle of arrayObstacles) {
      obstacle.draw(obstacle.x, obstacle.y);
      obstacle.x += -2;

      if (obstacle.x < -250) {
        obstacle.x = width;
        obstacle.x = Math.floor(Math.random() * 2000 + width);
      }
    }

    vehicle(value.vehicleX, value.vehicleY);

    textSize(20);
    text("Time", 25, 40);
    text("Velocity", 25, 70);

    text(timer, 200, 40);
    text(Math.floor(value.velocity), 200, 70);

    //how the vehicle falls
    value.vehicleY += value.velocity;
    value.vehicleX += value.vehicleDirection;

    if (value.vehicleDirection < 0) {
      value.vehicleDirection -= value.friction;
    } else if (value.vehicleDirection > 0) {
      value.vehicleDirection += value.friction;
    }
    value.velocity += value.acceleration;

    //control the thrusters/speed with the spacebar or up-arrow
    if (keyIsDown(key.spacebar)) {
      value.velocity -= 0.5;
    } else if (keyIsDown(key.arrowUp)) {
      value.velocity -= 0.5;
    }

    //control the position of the vehicle

    if (keyIsDown(key.arrowRight)) {
      value.vehicleDirection += 0.5;
    } else if (keyIsDown(key.arrowLeft)) {
      value.vehicleDirection += -0.5;
    }

    //controls that vehicle doesn't fly beyond the canvas height or width
    if (value.vehicleY < 0) {
      value.velocity = 0.5;
    } else if (value.vehicleX < -30) {
      value.vehicleX = -30;
    } else if (value.vehicleX > 570) {
      value.vehicleX = 570;
    }

    //The following 3 lines of code was adapted from: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp- / 2024-02-08
    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    }

    //controls if the player win or loses the game
    if (value.vehicleY > 500) {
      if (value.velocity < 5) {
        state = "end";
      } else {
        state = "end";
      }
    }
  }
}

function resultScreen() {
  scenary();
  if (value.velocity < 5) {
    //win box
    rect(175, 90, 230, 100);
    //The following 1 line of code was addapted from: https://www.geeksforgeeks.org/p5-js-textsize-function/ - 2024-02-07
    textSize(50);
    text("WINNER", 190, 155);
  }
  if (timer === 0) {
    console.log("timer ended");
  } else {
    //loss box
    rect(175, 90, 230, 100);
    textSize(50);
    text("LOSS", 220, 155);
  }

  //restart button
  rect(175, 200, 230, 60);
  textSize(20);
  text("Restart Game", 235, 235);
}

//function to click buttons
function mouseClicked() {
  if (
    //start game button
    mouseX > 175 &&
    mouseX < 175 + 230 &&
    mouseY > 200 &&
    mouseY < 200 + 60 &&
    state === "start"
  ) {
    value.vehicleY = 90;
    value.velocity = 0.5;
    value.obstacleX = 600;
    state = "game";
  } else if (
    //restart game button
    mouseX > 175 &&
    mouseX < 175 + 230 &&
    mouseY > 200 &&
    mouseY < 200 + 60 &&
    state === "end"
  ) {
    value.vehicleY = 90;
    value.velocity = 0.5;
    value.obstacleX = 600;
    state = "game";
  }
}

//create the draw function to make the canvas and the content visable
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "end") {
    resultScreen();
  }
}
