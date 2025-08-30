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
            add(first, second);
        case "subtract":
            subtract(first, second);
        case "multiply":
            multiply(first, second);
        case "divide":
            divide(first, second);
    }
    
}