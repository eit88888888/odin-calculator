const buttons = document.querySelectorAll('.btn');
const display = document.querySelector(".display")

let first = 0;
let second = '';
let operator = '';

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["add", "subtract", "multiply", "divide"];

const rps = ["X1", "X2", "X3"];

buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', event => {

    const value = event.currentTarget.value;

    if (numbers.includes(value) || value === "koma"){
        if (value === "koma") {
            if (second.includes('.')) return;
            if (second == "") second = "0.";
            else second += ".";

        } else {
           if (second == "0") second += value; 
           else second += value;
        }
            

        display.textContent = String(second).replace('.', ',');
        return;

    } else if (operators.includes(value)) {
        operator = value;
        if (second !== '') {
            first = parseFloat(second);
        }
        let operatorDisplay;
        
        switch (operator) {
            case "add":
    operatorDisplay = "+";
    break;
            case "subtract":
              operatorDisplay = "-";
              break;
            case "multiply":      
    operatorDisplay = "×";
    break;
            case "divide":        
    operatorDisplay = "÷";
    break;
            default:      
    operatorDisplay = "";
           }            
        display.textContent = String(first).replace('.', ',') + operatorDisplay;
        second = '';  
        return;
        
    } else if (value === "equal") {
        if (operator === "divide" && second === 0) {
            display.textContent = "Error";
            first = 0;
            second = '';
            operator = '';
        } else {
            second = operate(parseFloat(first), operator, parseFloat(second));
            display.textContent = second.toString().replace('.', ',');
        }
        return;
        

    } else if (value === "clear") {
        first = 0;
        second = '';
        operator = '';
        display.textContent = first;
    }

    console.log(first, second, operator);


    
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
        default: return second;
    }
    
}



