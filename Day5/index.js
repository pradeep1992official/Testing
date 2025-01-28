// diiference in var, let and const

var parameter = "Speed"; //declaration and initalisation possible
console.log(parameter);
var parameter1; //"only declaration" possible
console.log(parameter1);
parameter1 = "velocity"; //then initialisation also possible
console.log(parameter1);
parameter1 = "acceleration"; //reinitialsation  also possible
console.log(parameter1);
var parameter1 = "gravity";
console.log(parameter1);

let unit = "ms";
console.log(unit);
let unit1;
console.log(unit1);
unit1 = "kms";
console.log(unit1);
unit1 = "mhp";
console.log(unit1);
//let unit1 = "mph"; cannot reinitialise let variables in block scope

//const pi;
// pi = 3.14       //not possible without initialization

const pi = 3.1415; //correct form

//pi=3.1416; //const cannot reassign

console.log(pi);
// -------------------------------------------------------

var toy = "car"; //can access globally or function scope
console.log(toy); //car

function room () {
    toy = "train123"; //changes the global variable
    var toy = "train"; //scope variable
    console.log(toy); //train
}

room();

console.log(toy+"\n\n"); //car
// --------------------------------------------------

let toy1 = "car"; //let has issues with hoisting and can only be used in block scope
console.log(toy1);

function room1 () {
    // toy1 = "train"; //changes the global variable
    // var toy1 = "train123"; //scope initalised variable
    let toy1 = "train123"; //scope initalised variable
    console.log(toy1);
}

room1();

console.log(toy1);