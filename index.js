const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`; // Flytter dodger 10px til venstre
    }
  }
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 10}px`; 
    }
  }
    
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10); //baseret på moveDodgerLeft function

    if (bottom < 360) { // Gør så dodger ikke kan forlade boksen i toppen
        dodger.style.bottom = `${bottom + 10}px`;
    }}

  

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", ""); // unchanged
    const bottom = parseInt(bottomNumbers); // unchanged

        if (bottom > 0) { 
          dodger.style.bottom = `${bottom - 1}px`; // Move dodger down by -1px kan ændres til 10px ved at ændre "-1"
        
        }}  

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        playSoundOnMovement()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
        playSoundOnMovement()
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
        playSoundOnMovement()
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
        playSoundOnMovement()
    }
  });

// Audio functions below

function playMovementSound() {
    movementSound.currentTime = 0; // genstarter lyden
    movementSound.play();
  }
