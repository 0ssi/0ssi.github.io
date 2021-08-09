let h1 = document.getElementById("whore");
let time = 170;

setInterval(() => {
    console.log("HEJ");
    time++;
    h1.innerHTML = time;
}, 1000);