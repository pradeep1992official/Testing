const box = document.getElementById("box");
let x=50;
let y=50;
box.addEventListener("mouseover", ()=> {
  x += Math.floor(Math.random()*100)-50;
  y += Math.floor(Math.random()*100)-50;
  console.log(x,y);

box.style.left = `${x}px`;
box.style.top = `${y}px`;
// box.innerText = `${x},${y}`;

if(x<-10 || y<-10) {
  box.style.left = "200px";
  box.style.top = "200px";
  x=200;
  y= 200;
}
})

const area = document.getElementById("area");
area.addEventListener("dblclick", ()=> {
  box.style.left = "50px";
  box.style.top = "50px";
  x=50;
  y=50;
  
})