var x = 3 ** 3/3; // ** has higher precedent

var y = 3 ** (3/3); // Paranthesis has higher precedent than **

var z = 25/125/5; // Assosiativity - Solves from left to right if prcendent are the same.

console.log(x);
console.log(y);
console.log(z);

var a = 5;
var b = a++; //the value of a is assigned to b, then the value is incremented.

console.log(a);
console.log(b);

var c = 5;
var d = ++c; // The value of c is incremented then assigned to d

console.log(c);
console.log(d);