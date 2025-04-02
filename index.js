const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`; // Flytter dodger 10px til venstre
    }else {
        playGameOverSound(); // spiller gameover lyden når dodgeren vægen
    }  
  }
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 10}px`; 
    } else {
        playGameOverSound(); // spiller gameover lyden når dodgeren rammer vægen
    }} 
    
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10); //baseret på moveDodgerLeft function

    if (bottom < 360) { // Gør så dodger ikke kan forlade boksen i toppen
        dodger.style.bottom = `${bottom + 10}px`;
    } else {
        playGameOverSound(); // spiller gameover lyden når dodgeren rammer vægen
        console.log("Game Over!"); // til debugging
    }}  

  

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", ""); // unchanged
    const bottom = parseInt(bottomNumbers); // unchanged

        if (bottom > 0) { 
          dodger.style.bottom = `${bottom - 1}px`; // Move dodger down by -1px kan ændres til 10px ved at ændre "-1"
        
        } else {
            playGameOverSound(); // spiller gameover lyden når dodgeren rammer vægen
            console.log("Game Over!"); // til debugging
        }}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        playMovementSound()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
        playMovementSound()
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
        playMovementSound()
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
        playMovementSound()
    }
  });

// Audio functions below

function playMovementSound() {
    movementSound.currentTime = 0; // genstarter lyden
    movementSound.play();
    console.log("Sound played"); // til debugging
  }

  //game over function
const gameOverSound = document.getElementById("gameOverSound");
function playGameOverSound() {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
  }
