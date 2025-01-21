//switchcase

var category = "Neutral";

switch (category) {
  case "Man":
    console.log("The person is a male.");
    break;
  case "Women":
    console.log("The person is a female");
    break;
  case "Neutral":
    console.log("The person perfers privacy in gender");
    break;
  default:
    console.log("No data found");
}

var signal = "YELLOW";

switch (signal) {
  case "GREEN":
    console.log("Please proceed. GO");
    break;
  case "RED":
    console.log("Please hold. STOP");
    break;
  case "YELLOW":
    console.log("Your patience is appreciated. WAIT");
    break;
  default:
    console.log("We are sorry, Invalid Signal");
}
