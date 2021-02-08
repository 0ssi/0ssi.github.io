let displayElement = document.getElementById("display");
let rollButton = document.getElementById("roll");
rollButton.addEventListener("click", roll);
function roll() {
    // Generera random nummer
  }
  function roll() {
    let randomNumber = Math.round(Math.random() * 5) + 1 ;
 
    
    displayElement.innerHTML = randomNumber;
  }