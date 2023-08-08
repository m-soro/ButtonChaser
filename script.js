/**
 * --------------
 * THE VARIABLES
 * --------------
 *
 */
// initialize the score variable
let score = 0;

// initalize the width and height that will be determined in runtime
let aWidth;
let aHeight;

// create a time object that will runt the game loop
let timer;

// create an iteration counter that will kepp track the number of times the buttons move in the page
let iterations = 0;

// then add an eventlistener that will fire when the load event occurs
// this will fire after all the resources in the page are downloaded.
// will take 2 parameters - 1st one is the "load event"
// the second parameter is a function called setGameAreaBounds that will fire when the load
// event occurs
window.addEventListener("load", setGameAreaBounds);

function setGameAreaBounds() {
  aWidth = innerWidth; // this is the current window width
  aHeight = innerHeight; // this is the current window height
  console.log("This screen's available width and height:", aWidth, aHeight);
  //lets position the bounds in the screen
  // from the css file the gameArea has 10px from the left
  // 10 px from the right then subtract from the availabel width
  aWidth -= 22;
  // subtract the height from pageTitle and scoreLabel
  aHeight -= 97;
  // now assign this to game object that will give us access to style property
  document.querySelector("#gameArea").style.width = aWidth + "px";
  // now do the same for the height
  document.querySelector("#gameArea").style.height = aHeight + "px";
  // now add an event listner on the button - the #dot
  document.querySelector("#dot").addEventListener("click", detectHit); // Question: why this doesnt have parens?

  // Note1: for the dot to stay inside the playing area, we need to subtract the width of the dot plus the border of the available width
  aWidth -= 74; // 64 for with of the button and then 10 for around the playing area
  aHeight -= 74; // same for the height

  // lets start the game loop!
  moveDot();
}

// very important that the button stays inside the box See Note1
// to do that lets set the boundary -> lets set this in the setGameArea function
//this function's job is to randomly move the dot
function moveDot() {
  // get random coordinate for the dot
  let x = Math.floor(Math.random() * aWidth); //this is the width
  let y = Math.floor(Math.random() * aHeight); // this is the height

  // a simple conditional statement to make sure the dot stays inside the gaming area ...
  // Note1 takes care of right and bottom
  // Below conditional statement will take care of the left and top od the gaming area
  // this conditional will force the dot to move inside the gaming area
  console.log(
    "random y coordinate out of bounds? if True resetting to 10",
    y < 10
  );
  console.log(
    "random x coordinate out of bounds? ? if True resetting to 10",
    x < 10
  );
  if (x < 10) x = 10; // assign x to 10 - This is inside the boder
  if (y < 10) y = 10; // assign y to 10 - this is inside the border

  // now lets assign this random dot movement to the dot!
  // the exciting part!
  document.querySelector("#dot").style.left = x + "px";
  document.querySelector("#dot").style.top = y + "px";

  // lets set the game condition. For now we are arbitrarily setting game play for 30 seconds
  // it means the game is still going, so call the moveDot  again!
  if (iterations < 30) {
    // move the dot every second. This is not recursive
    timer = setTimeout("moveDot()", 1000); // -> Question: why is this in quotes?
    console.log(timer);
    // the else clause is for the game over
  } else {
    // reset the score and display Game Over
    document.querySelector("#scoreLabel").innerHTML += "     Game Over!";
    // remove the click event, its game over so the button cannot be clicked
    document.querySelector("#dot").removeEventListener("click", detectHit);
    // clear the timer
    clearTimeout(timer);
  }
  iterations++;
}

// this just increments the score is the button is clicked
function detectHit() {
  console.log("This is the detectHit() function: incrementing score");
  score += 1;
  // then display it on the screen, lets get the dom element for this
  // then set its innerHTML property
  document.querySelector("#scoreLabel").innerHTML = `Score: ${score}`;
}
