function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(`The number is positive : ${number}`);
    } else {
      reject(`The number is negative : ${number}`);
    }
  });
}

let num = prompt("Enter a number  : ");

checkNumber(num)
  .then((val) => {
    alert(val);
  })
  .catch((err) => {
    alert(err);
  });
