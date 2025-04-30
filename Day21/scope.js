function testVar() {
  var x = 2;
  if (true) {
    var x = 3;
    document.getElementById("result").innerText = "Inside the Block: " + x;
  }
  document.getElementById("result").innerText += " | Outside the Block: " + x;
}

function testLet() {
  let y = 2;
  if (true) {
    let y = 3;
    document.getElementById("result").innerText = "Inside the Block: " + y;
  }
  document.getElementById("result").innerText += " | Outside the Block: " + y;
}

function testConst() {
  const z = 2;
  document.getElementById("result").innerText = "Const Z : " + z;
  try {
    z = 3;
  } catch (error) {
    document.getElementById("result").innerText += " | " + error;
  }
}
