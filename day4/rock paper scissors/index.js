//selecting inputs
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
//keeping score
let you = 0;
let comp = 0;
let result = undefined;

function getComputerPlay() {
  const options = ["rock", "paper", "scissors"];

  let pick = Math.floor(Math.random() * 3);
  let computerPick = undefined;

  if (pick == 0) {
    computerPick = options[0];
  } else if (pick == 1) {
    computerPick = options[1];
  } else {
    computerPick = options[2];
  }

  return computerPick;
}

function play(humanPlay) {
  let computerPick = getComputerPlay();

  if (humanPlay == rock && computerPick == "paper") {
  }
}

rock.addEventListener("click", play);
