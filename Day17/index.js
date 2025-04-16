var myInterval = 0;
function display() {
    const myTimeOut = setTimeout(() => {
        alert("I have come after waiting for 5 seconds");
    }, 5000);
}

function interval() {
    myInterval = setInterval(() => {
        alert("I will come every 5 secs until you clear Interval");
    }, 5000);
}

function clear_display() {
    clearInterval(myInterval);
}
const functionOne = () => {
    console.log("Hey, this is FUNCTION ONE!!!"); //1
    const time = setTimeout(() => {
        console.log("Hey, this is FUNCTION TWO!!!"); //3
    }, 2000);
    console.log("Hey, this is FUNCTION ONE PART 2!!!");//2

}
const functionTwo = () => {
    console.log("Hey, this is FUNCTION TWO!!!"); //3
}

// functionOne();