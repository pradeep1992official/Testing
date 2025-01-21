//while loop
// count the digits of the number
var num = 12345687;
var sum = null;
var newNum = num;

while (newNum > 0) {
  sum += (newNum % 10); // sum = sum + last digit of num
  newNum = parseInt(newNum / 10); // update num by removing the last digit of the num
}
console.log(sum);
