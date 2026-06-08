// variations
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var text = "O";
var turn = 1;

// functions
function num(input) {
  // turn-changer
  console.log(turn++);
  if (turn % 2 === 0) {
    text = "O";
  } else {
    text = "X";
  }

  // clicktofunction
  if (input === "box1") {
    box1.innerHTML = text;
  } else if (input === "box2") {
    box2.innerHTML = text;
  } else if (input === "box3") {
    box3.innerHTML = text;
  } else if (input === "box4") {
    box4.innerHTML = text;
  } else if (input === "box5") {
    box5.innerHTML = text;
  } else if (input === "box6") {
    box6.innerHTML = text;
  } else if (input === "box7") {
    box7.innerHTML = text;
  } else if (input === "box8") {
    box8.innerHTML = text;
  } else if (input === "box9") {
    box9.innerHTML = text;
  }
}
