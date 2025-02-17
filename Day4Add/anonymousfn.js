/*
Anonymous Function
    There will be no function name.



*/

var assign = function () { //anonymous function
    console.log("inside function");
}

assign();

var applyDiscount = function(cartAmount, discount){
    return cartAmount - discount;
}

console.log(applyDiscount(25000,2300));