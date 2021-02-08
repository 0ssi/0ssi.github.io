let skickaButton = document.getElementById("skicka");
let hejElement = document.getElementById("hej")
let nameElement = document.getElementById("name")

skickaButton.addEventListener("click", skicka);


function skicka() {
hejElement.innerHTML = "Hej " + nameElement.value ; 
 
}


