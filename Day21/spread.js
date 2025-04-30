function testSpread () {
    const num1 = [1,2,3];
    const num2 = [4,5,6];

    const combined =[...num1, ...num2];

    document.getElementById("spreadOP").innerHTML = `
    <strong>The combined array using Spread is : </strong> ${combined.join(", ")}
    `
}

function testRest(...args) {
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    document.getElementById("spreadOP").innerHTML += `
    <br><strong>The sum using rest  is : </strong> ${sum}
    `
}