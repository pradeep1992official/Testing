//split and join

var weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var joinedArr = weekDays.join(" ");

console.log(joinedArr); //Joins the elements to form a string with seperator as 'parameter'

//Monday Tuesday Wednesday Thursday Friday Saturday Sunday ==> Output
// ----------------------------------------------------------------------------------------------

var splitArr = joinedArr.split(" ");

console.log(splitArr); //converts the string to array, seperates by 'parameter'.


