// variables
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var sound = new Audio("music/winning_sound.mp3");
var sound2 = new Audio("music/Fahhh.mp3");
var text = "O";
var count = 0;

// main-game
function game(value) {
  turnChanger()
  
  if (value === "box1" && box1.innerHTML === "") {
    box1.innerHTML = text;
    count++;
  } else if (value === "box2" && box2.innerHTML === "") {
    box2.innerHTML = text;
    count++;
  } else if (value === "box3" && box3.innerHTML === "") {
    box3.innerHTML = text;
    count++;
  } else if (value === "box4" && box4.innerHTML === "") {
    box4.innerHTML = text;
    count++;
  } else if (value === "box5" && box5.innerHTML === "") {
    box5.innerHTML = text;
    count++;
  } else if (value === "box6" && box6.innerHTML === "") {
    box6.innerHTML = text;
    count++;
  } else if (value === "box7" && box7.innerHTML === "") {
    box7.innerHTML = text;
    count++;
  } else if (value === "box8" && box8.innerHTML === "") {
    box8.innerHTML = text;
    count++;
  } else if (value === "box9" && box9.innerHTML === "") {
    box9.innerHTML = text;
    count++;
  }
  winChecker()
  drawFunction()
  btnReset()
}

// functions
function turnChanger() {
  if (count % 2 === 0) {
    text = "O";
  } else {
    text = "X";
  }
}
function winChecker() {
  // for o
  if (
    (box1.innerHTML === "O" &&
      box2.innerHTML === "O" &&
      box3.innerHTML === "O") ||
    (box4.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box6.innerHTML === "O") ||
    (box7.innerHTML === "O" &&
      box8.innerHTML === "O" &&
      box9.innerHTML === "O") ||
    (box1.innerHTML === "O" &&
      box4.innerHTML === "O" &&
      box7.innerHTML === "O") ||
    (box2.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box8.innerHTML === "O") ||
    (box3.innerHTML === "O" &&
      box6.innerHTML === "O" &&
      box9.innerHTML === "O") ||
    (box1.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box9.innerHTML === "O") ||
    (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O")
  ) {
    sound.play();
    alert("PLAYER O WINS");
    reset();
  }
  // for x
  else if (
    (box1.innerHTML === "X" &&
      box2.innerHTML === "X" &&
      box3.innerHTML === "X") ||
    (box4.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box6.innerHTML === "X") ||
    (box7.innerHTML === "X" &&
      box8.innerHTML === "X" &&
      box9.innerHTML === "X") ||
    (box1.innerHTML === "X" &&
      box4.innerHTML === "X" &&
      box7.innerHTML === "X") ||
    (box2.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box8.innerHTML === "X") ||
    (box3.innerHTML === "X" &&
      box6.innerHTML === "X" &&
      box9.innerHTML === "X") ||
    (box1.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box9.innerHTML === "X") ||
    (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X")
  ) {
    sound.play();
    alert("PLAYER X WINS");
    reset();
  }
}
function drawFunction() {
  if (count === 9) {
    sound2.play()
    alert("NO ONE WINS!!!")
    reset();
  }
}
function btnReset(reset) {
  if (reset === "btn") {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    count = 0;
  }
}
function reset() {
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
  box9.innerHTML = "";
  count = 0;
}
