//Objects

/**
 * Table
 *  Material Type : "Wooden"
 *  Height : 2.52
 *  Weight : 15
 *  Color : "White"
 * 
 * Chair
 *  Material : "Wooden"
 *  Legs : 3
 *  Colour : "Brown"
 *  Weight : 3
 * 
 * Pen
 *  Colour : "Black"
 *  Shape : "triangle"
 *  
 */

/**
 * array brackets - > []
 * object brackets -> {}
 * 
 * Objects saves as "key"-"value" pair/property.
 * No special character in "key"
 * 
 */


var book1 = {
    title : "Shiva - Triology",
    pages : 565,
    genre: "Spiritual",

};

var book2 = {
    title : "Half Girlfriend",
    pages : 154,
    genre : "Romance/Drama",
};

console.log(book1); //prints the oject and its parameters
console.log(book1.title); //prints only the title property of  the object
console.log(book1["title"]); // another way to access the properties of the object
