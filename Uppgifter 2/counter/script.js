const tText = document.querySelector("#Text");
const cCharacters = document.querySelector("#cCharacters");
const Words = document.querySelector("#Words");


tText.addEventListener("input", (b) => {
 
    let text = b.target.value.trim();
    console.log(text)

    let words = text.split(" ");

    
    Words.innerText = "Words: " + words.length;
    cCharacters.innerText = "Characters: " + text.length;
});
console.log("eh");
