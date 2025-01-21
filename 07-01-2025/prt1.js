//splice practice

var fruitsArr = ["Apple", "Banana", "Cherry", "Date", "Fig"];

fruitsArr.splice(1, 2);

console.log(fruitsArr); // removes Banana and Cherry
// ----------------------------------------------------------------------
var colorsArr = ["Red", "Green", "Blue"];

colorsArr.splice(1, 0, "Yellow", "Pink");

console.log(colorsArr); //adds "Yellow" and "Pink" between red and green

// ----------------------------------------------------------------------
var shapeArr = ["Circle", "Square", "Triangle"];

shapeArr.splice(1, 1, "Rectangle", "Ellipse");

console.log(shapeArr); //replaces Square with rectangle and Ellipse.
