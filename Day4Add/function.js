/* Syntas fofr function declaration and definition

function

()

arguments -> function invoction

parameters - > function declaration and definition

return


function functionName (parameter1, parameter2) {  =====> function declaration and definition

code

return value, if required
}


functionName () =========> call the function with functionName


*/


function squareCalculator (product){
    var answer = product*product

    return answer
}

var productSq = squareCalculator(3);
console.log(productSq);


function applyDiscount(cartAmount,discount){
    // var cartAmount =1000;
    // var discount = 100; 

    cartAmount -= discount;
    return cartAmount;
}

console.log(applyDiscount(25000,100));