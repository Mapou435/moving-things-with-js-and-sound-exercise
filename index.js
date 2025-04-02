const dodger = document.getElementById("dodger");

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
    }

    document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  });