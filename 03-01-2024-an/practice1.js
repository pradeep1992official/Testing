//nested elseif

var x = -10;

// if (x === 0) {
//   console.log("Neither Positive, nor Negative");
// } else if (x > 0) {
//   if (x < 10) {
//     console.log("Single Digit Positive Number");
//   } else {
//     console.log("Multi Digit Positive Number");
//   }
// } else {
//   console.log("Negative Number");
// }

if (x == 0) {
  console.log("Neither Positive nor negative Number");
} else if (x < 0) {
  console.log("Negative Number");
} else {
  if (x < 10) {
    console.log("Single digit Positive NUmber");
  } else {
    console.log("Multi digit Positive Number");
  }
}
