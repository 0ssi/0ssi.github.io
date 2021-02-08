let displayElement1 = document.getElementById("display1");
let displayElement2 = document.getElementById("display2");
let displayElement3 = document.getElementById("display3");
let displayElement4 = document.getElementById("display4");
let displayElement5 = document.getElementById("display5");
let displayElement6 = document.getElementById("display6");
let rollButton = document.getElementById("roll");
rollButton.addEventListener("click", roll);
function roll() {

    let randomNumber = Math.round(Math.random() * 5) + 1 ;

    displayElement1.src = "dice-" + randomNumber + ".svg"
    randomNumber = Math.round(Math.random() * 5) + 1 ;
    displayElement2.src = "dice-" + randomNumber + ".svg"
    randomNumber = Math.round(Math.random() * 5) + 1 ;
    displayElement3.src = "dice-" + randomNumber + ".svg"
    randomNumber = Math.round(Math.random() * 5) + 1 ;
    displayElement4.src = "dice-" + randomNumber + ".svg"
    randomNumber = Math.round(Math.random() * 5) + 1 ;
    displayElement5.src = "dice-" + randomNumber + ".svg"
    randomNumber = Math.round(Math.random() * 5) + 1 ;
    displayElement6.src = "dice-" + randomNumber + ".svg"
}