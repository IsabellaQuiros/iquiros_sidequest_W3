// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
let chosenRightImage = null;

function drawWin() {
  background(0);

  fill(0, 255, 0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("YOU WIN!", width / 2, 250);

  if (chosenRightImage === null) {
    chosenRightImage = random(rightImages);
  }

  image(chosenRightImage, width / 3, 300, 250, 250);

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 550);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
