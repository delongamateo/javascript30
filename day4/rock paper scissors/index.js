//selecting needed elements
const scoreHumanEl = document.querySelector(".score-human");
const scoreComputerEl = document.querySelector(".score-bot");
const choiceHumanEl = document.querySelector(".choice-human");
const choiceComputerEl = document.querySelector(".choice-bot");
const resultEl = document.querySelector(".result-current");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//score variables
let scoreHuman = 0;
let scoreComputer = 0;
let result;

//function to get random pick from computer
function getComputerPlay() {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function play(humanPlay) {
  //saving computer random pick
  const computerPlay = getComputerPlay();

  //logic deciding who won
  if (humanPlay === "rock") {
    if (computerPlay === "paper") {
      result = "Lost";
      scoreComputer++;
    } else if (computerPlay === "scissors") {
      result = "Won";
      scoreHuman++;
    } else {
      result = "Tie";
    }
  } else if (humanPlay === "paper") {
    if (computerPlay === "rock") {
      result = "Won";
      scoreHuman++;
    } else if (computerPlay === "scissors") {
      result = "Lost";
      scoreComputer++;
    } else {
      result = "Tie";
    }
  } else if (humanPlay === "scissors") {
    if (computerPlay === "rock") {
      result = "Lost";
      scoreComputer++;
    } else if (computerPlay === "paper") {
      result = "Won";
      scoreHuman++;
    } else {
      result = "Tie";
    }
  } else {
    return false;
  }

  //display human and computer pick and score
  scoreHumanEl.textContent = scoreHuman;
  scoreComputerEl.textContent = scoreComputer;
  choiceHumanEl.textContent = humanPlay;
  choiceComputerEl.textContent = computerPlay;
  resultEl.textContent = result;
}

//event listeners for human pick
rock.addEventListener("click", function () {
  play("rock");
});

paper.addEventListener("click", function () {
  play("paper");
});

scissors.addEventListener("click", function () {
  play("scissors");
});
