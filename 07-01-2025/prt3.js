//slice programs

var weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(weekDays.slice(1, 4)); //takes the subset upto 4th elements and removes first value

// ------------------------------------------------------------

var animalArr = ["Lion", "Tiger", "Leopard"];

console.log("Before slicing :", animalArr);

console.log("During Slicing : ", animalArr.slice(1, 3));

console.log("After slicing :", animalArr); //No changes

// --------------------------------------------------------------------

var fruitsArr = ["Strawberry", "Banana", "Mango", "Kiwi", "Pineapple"];

console.log(fruitsArr.slice(2)); //takes the subset as full array and deletes the 2 elements; or fruitsArr.slice(-3);
