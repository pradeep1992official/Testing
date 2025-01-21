// Task : Determine voting eligibility based on age.

var age = 30;

if(age >= 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible");
}

var speedLimit = 81;

if(speedLimit < 30) {
    console.log("SLOW");
} else {
    if(speedLimit > 80) {
        console.log("Fast");
    } else {
        console.log("Average");
    }
}   

/**
 * ternary Operator
 * condition?true-block:false-block 
 * 
 */

var num = 11;

num % 2 == 0 ? console.log("Even") : console.log("Odd") ;