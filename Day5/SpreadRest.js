//spread
//rest

function add(x,y,z) {
    return x+y+z;
}

const numbers = [1,2,3];
const numbers2 = [4,5,6];

console.log(...numbers); //spread operator returns the elements of  the array into strings.

console.log(add(...numbers)); //spread operator returns the elements of  the array into seperate argument for the function

let shallowCopy_number = [...numbers]; //spread operator can be used to shallow copy the contents to a new independent array

console.log(shallowCopy_number);


let mergedCopy_array = [...numbers,...numbers2];    //spread operator can be used to concatenate two different arrays without affecting the originals.

console.log(mergedCopy_array)

//all these can be applied to objects too.

// REST Operator

function concateStrings(...words) { //Rest Operator takes n number of parameters into array 
    console.log(words); //saves n number of parameters into array
    return words.join(' ');
}


console.log(concateStrings("Pradeep","Srinivasan","."," Mr")); 