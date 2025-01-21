//slice
// splice

var vowels = ["A", "E", "I", "O", "U"];

console.log(vowels.slice(1, 3));
/**
 * Slice
 * array.slice('trim front','subset length')
 * 
 * Slice -> Doent affect the array.
 * 
 * negative indicates, counting from last of array and will not delete them.
 */

console.log(vowels);

vowels.splice(3, 2, "Love","You");
/**
 * array.splice('index','how many to replace','value to be replaced')
 * 
 * -> returns the value of replaced entities.
 * 
 * if no replacement need, 0 is used in 2nd parameter, will insert in the array
 * 
 * affects the original array
 */


console.log(vowels);
