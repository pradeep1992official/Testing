//Day 7
//Property-Short Hand

let fName = "Pradeep";
let age = 33;

const bioDetails = {
    bioName : fName,
    bioAge : age,
};
console.log(bioDetails);        //assigns keyvalue 


const newBioDetails = {fName, age};     //property short hand, can use the variables to make as the keyvalue
console.log(newBioDetails);