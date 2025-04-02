const dodger = document.getElementById("dodger");

//styling i javascript
dodger.style.backgroundColor = "#FF69B4"; // sæt baggrund til pink
dodger.style.bottom = "0px"; // sæt bund til 0px
dodger.style.left = "0px"; // sæt dodger venstre til 0px

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });