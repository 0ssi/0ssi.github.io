const tid = document.querySelector("#tid")


let finald = new Date("01/01/2022");


setInterval(() => {
    let d = new Date();


let dateDifference = finald.getTime() - d.getTime();
let day = dateDifference / (1000 * 60 * 60 * 24);
let hour = (day - Math.floor(day)) * 24;
let minute = (hour - Math.floor(hour)) * 60;
let second = (minute - Math.floor(minute)) * 60;

console.log(dateDifference);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);

tid.innerHTML = Math.floor(day) + "&nbsp;:&nbsp;" +
                Math.floor(hour) + " &nbsp;:&nbsp; " +
                Math.floor(minute) + "&nbsp;&nbsp;: " +
                Math.floor(second);
}, 1000);


