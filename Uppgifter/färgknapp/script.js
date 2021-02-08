let skickaButton = document.getElementById("skicka");
skickaButton.addEventListener("click", skicka);
let nameElement = document.getElementById("name")
let bodyElement = document.getElementById("body")
let namnElement = document.getElementById("namn")
let nimiElement = document.getElementById("nimi")

function skicka(){
    bodyElement.style.backgroundColor = nameElement.value;
    bodyElement.style.color = namnElement.value;
    bodyElement.style.fontSize = nimiElement.value + "px"

}