# Button Chaser

In this game a button randomly appears in the screen, the goal is to click the button to increase your score!

1. Declare variables.
2. Listen for the load event to set the game boundaries

3. The setGameAreaBounds receives the vailable width and height and then does some calculations based on the width and height of the html elements that are inside the page(even outside of the box)
4. I could rename the hardcoded values to a simple variable name.
5. Lets use this new computed boundary values inside the gameArea by setting the width and height in the DOM
6. Next, lets attach an event listener to dot element, the dot will listen for a click and then will call a function that just increments the score. This is the detect hit function. Since this is pretty small code I could do an arrow function for it. Lastly,
7. call the moveDot() function

8. The moveDot() function - Randomly selects x and y coordinate for where to place the button. Now, it could be anywarhere in the screen. To mitigate this....
9. A conditional statement is used. If x coordinate is less than 10 and or if y coordinate is less than 10 then rest this variable to 10 (This is inbounds) We have 5 pixels in both left and right
10. To control how long the Movedot function should run, we will feed this into setTimeout function which will call the moveDot function every 1 second.
11. to keep track of how many times the set interval will run, we will use the iterations variable right now its set to zero. For this Eaxmple, if iterations is less than 30, then run the move dot every second - assign this to a timer variable after every successful loop increment the iteration. This is the stop condition. Timer basically just outputs every second the move dot runs.

12. The else clause is for Game Over, if Game over meaning run out of time. display Game Over and then remove the event listener for the button and reset the timer.

13. Detect hit function just increments the score and outputs it in the DOM
