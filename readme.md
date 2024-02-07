# Lunar Lander

A simple game made with Javascript and p5.js.

Land the vehicle safely on the ground without colliding with any obstacles. You control the levitation/thrusters with the spacebar or with the arrow keys.

### Rules

- The game have 3 different states/screens

  - A start screen
  - A game screen/The actual game
  - Game over screen --> have the ability to restart the game from this screen

- Control the thruster / Vehicle can move up and down with up-arrow and/or spacebar on keyboard
- Vehicle can move from side to side with the right-arrow/left-arrow keys
- Obstacles moves from the right to the left
- Vehicle falls down to the ground because of gravity --> velocity is not linear
- Vehicle goes up when clicking the up-key or spacebar
- If vehicle collides with obstacles || ground, the game is over

### Building blocks

- Create the canvas
- Create a variable boolean --> Game is running --> true/false for an if-statement
- Create objects and arrays for the :

  - The values --> x, y, velocity, acceleration, etc.
  - The keyboard inputs - key-arrow/spacebar
  - The different states/game modes

- Draw the background (with a function)
- Draw the obstacles (with a function for each obstacle)

  - Create x#(3) of obstacles (use an array?)?

- Draw the vehicle (with a function)

  - Add gravity to the vehicle
  - Make the vehicle fly/control the thruster

- Detect collision between ground / the obstacles and vehicle
