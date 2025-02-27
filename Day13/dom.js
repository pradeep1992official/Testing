const button = document.querySelector("button");


button.addEventListener("dblclick", ()=> {
  document.body.style.backgroundColor = "gold";
  document.body.append("Hidden message Revealed");

  const p = document.createElement("p");
  p.innerText = "This text is created by using createElement and appendChild";
  document.body.appendChild(p);

  document.body.prepend("This text is using prepend");
})


let value = document.getElementById("intro");
console.log(value);

// const firstElement = document.getElementById('qwert');
// const firstElement_sub = document.querySelector("qwert");
const secondElement = document.getElementsByTagName("span");
const thirdElement = document.getElementsByClassName("class");

// console.log(firstElement);
// console.log(firstElement_sub);
console.log(secondElement);
console.log(thirdElement);

value.setAttribute("class", "big");

document.innerText = value;