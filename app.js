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
console.log(operate(2, "add", 2));
console.log(operate(2, "subtract", 2));
console.log(operate(6, "multiply", 2));
console.log(operate(6, "divide", 2));