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

function results(a, b, operation) {
    return operation(a,b);
}

console.log(results(10,20,add));
console.log(results(10,20,subtract));
console.log(results(10,20,multiply));
console.log(results(10,20,divide));