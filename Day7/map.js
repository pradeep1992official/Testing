//Array Mapping

let MRP = [120, 250, 390];

let discount = 0.10

let disPrice = MRP.map(function (item) { //we can replace function(item) as (item) => 
    return item*discount;
});

console.log(disPrice);

let lowPrice = MRP.filter((item) => { //filter the items based on the conditions
    return item < 300;
});

console.log(lowPrice);


//Task = filter and sum the numbers divisible by 10

var input = [23,45,678,90,33,21,780,670,498,58940,6565,900,370,1299,1300]; // input array

let outputArray = input.filter((item) => {
    if(item % 10 == 0) {
        return item; // filters all number divisible by 10 
    }
});

let outputArraySum = outputArray.reduce((acc, item) => {
    return acc + item; //sums all the numbers using reduce.
});

console.log("Divisible by 10 : ", outputArray);
console.log("Sum of numbers Divisible by 10 : ", outputArraySum);


//reduce
const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log(total); // Output: 150
