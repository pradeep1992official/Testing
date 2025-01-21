//counting stars

var starCount = 1;

while (starCount <= 10) {
  if (starCount == 1) {
    console.log("I saw", starCount, "star.");
  } else console.log("I saw", starCount, "stars.");
  starCount++;
}

console.log("I completed counting the", starCount - 1, "stars");
