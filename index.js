const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`; // Flytter dodger 10px til venstre
    }
  }
  
  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right > 0) { 
      dodger.style.right = `${right + 10}px`;
    }
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