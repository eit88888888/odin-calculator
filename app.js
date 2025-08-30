const buttons = document.querySelectorAll('.btn');
const display = document.querySelector(".display")

let first = 0;
let second = '';

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const rps = ["X1", "X2", "X3"];
const operators = ["add", "subtract", "multiply", "divide", "equal"]
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', event => {
    if (numbers.indexOf(event.target.value) >= 0){
        second += event.target.value;
        display.textContent = second;
    } else if (operators.indexOf(event.target.value) >= 0) {
        first = operate(first, event.target.value, second);
        display.textContent = first;
        second = '';
    }
    console.log(first, second);


    
  })
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, operator, second) {
    switch (operator) {
        case "add":
           return add(first, second);
        case "subtract":
           return subtract(first, second);
        case "multiply":
            return multiply(first, second);
        case "divide":
            return divide(first, second);
    }
    
}


