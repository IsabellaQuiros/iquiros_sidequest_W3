// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"

let chosenWrongImage = null; // Allows for one random pick

function drawLose() {
  background(0);

  fill(255, 0, 0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("YOU LOSE!", width / 2, 250);

  // Allows for one random pick
  if (chosenWrongImage === null) {
    chosenWrongImage = random(wrongImages);
  }

  image(chosenWrongImage, width / 3, 300, 250, 250); // Draws chosen image

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 550);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
