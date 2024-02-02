# Lunar Lander

### Rules

- Vehicle can move up and down with up-arrow || spacebar on keyboard
- Obstacles move to the left
- Vehicle falls down to the ground because of gravity
- Vehicle goes up when clicking the up-key or spacebar
- If vehicle collides with obstacles or ground, the game is over

#### Order to build

1. Create the canvas
2. Create an array for the values

   - Create an object containing the different values for x, y, velocity, acceleration, etc.
   - Create an object containing the key-arrow/spacebar values
   - Create a variable boolean --> Game is running - true/false for an if-statement

3. Draw the background (with a function)
4. Draw the obstacles (with a function for each obstacle)

   - Create x# of obstacles (use an array?)?

5. Draw the vehicle (with a function)
6. Add gravity to the vehicle
7. Make the vehicle fly
8. Detect collision between ground and vehicle
9. Detect collision between the obstacle and vehicle
