let num1 = document.getElementById ("num1");
let num2 = document.getElementById ("num2");
let body = document.getElementById ("body")
let sum = document.getElementById ("sum")
let plusButton = document.getElementById ("plus")
let minusButton = document.getElementById ("minus")
let timesButton = document.getElementById ("times")
let divideButton = document.getElementById ("divide")
plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
timesButton.addEventListener("click", times)
divideButton.addEventListener("click", divide)

function plus(){
    sum.innerHTML = parseFloat (num1.value) + parseFloat (num2.value)
}


function minus(){
    sum.innerHTML = parseFloat (num1.value) - parseFloat (num2.value)
}

function times(){
    sum.innerHTML = parseFloat (num1.value) * parseFloat (num2.value)
}

function divide(){
    sum.innerHTML = parseFloat (num1.value) / parseFloat (num2.value)
}
