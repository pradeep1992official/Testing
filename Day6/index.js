//Array destructuring
const numbersNew = [1, 2, 3, 4, 5];

const [first, second, ...others] = numbersNew; //...others is a rest operator, where it saves the remaining elements in an arrays .

console.log(`First :  ${first}`);
console.log(`Second :  ${second}`);
console.log("Others : ", others); //others is an array

// ---------------------------------------------

const person = {
    name : "Pradeep",
    age : 33,
}

const {name: newName, age:newAge} = person;
// const {name, age} = person;  //can use the same elements also

console.log(newName);
console.log(newAge);

// ---------------------------------------------

