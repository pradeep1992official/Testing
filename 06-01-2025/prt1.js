//eat cookies

var cookiesAvailabe = 5;

while (cookiesAvailabe > 0) {
  if (cookiesAvailabe == 1) {
    console.log("I'm eating the last cookie.");
  } else
    console.log("I'm eating a cookie, still", cookiesAvailabe - 1, "available");
  cookiesAvailabe--;
}

console.log("No more cookies to eat.!!");