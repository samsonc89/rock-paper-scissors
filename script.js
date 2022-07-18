"use strict";

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const computerChoiceDisplay = document.getElementById("computer-display");
const playerChoiceDisplay = document.getElementById("player-display");

let playerScore = 0;
let computerScore = 0;

//start with function that has computer return rock paper or scissors
function computerPlay() {
  let playChoice = ["rock", "paper", "scissors"];
  return playChoice[Math.floor(Math.random() * 3)];
}

let playerInput;
/*querySelectorAll returns a list(node list) of all the elements but you need to iterate 
over each item in that list. which is why you use the forEach method.
*/
const playerChoices = document.querySelectorAll(".play");

const playRound = function () {
  let playerSelection = playerInput;
  let computerSelection;

  // prompt("Rock, Paper or Scissors?", "").toLowerCase();
  console.log(playerSelection);

  if (playerSelection !== null && playerSelection !== undefined) {
    computerSelection = computerPlay();
    console.log(computerSelection);
  } else {
    return;
  }
  //Return who wins
  // return winner
  if (playerSelection == computerSelection) {
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  computerChoiceDisplay.style.background = `url(./images/${computerSelection}.png) center no-repeat`;
  computerChoiceDisplay.style.backgroundSize = "100% 100%";

  playerChoiceDisplay.style.background = `url(./images/${playerSelection}.png) center no-repeat`;
  playerChoiceDisplay.style.backgroundSize = "100% 100%";

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};

playerChoices.forEach(function (btn) {
  btn.addEventListener("click", () => {
    playerInput = `${btn.id}`;
    playRound();
  });
});

/*function () {
  let input = prompt("Rock, Paper or Scissors?", "");
  if (input === null) {
    alert("Cancelled");
    return;
  }
  let inputEdited = input.toLowerCase();
  if (
    inputEdited !== "rock" &&
    inputEdited !== "paper" &&
    inputEdited !== "scissors"
  ) {
    alert("Invalid Answer");
  } else return inputEdited;
};
*/

/*
//Do this for 5 rounds
let game = function () {
  for (let i = 0; i < 5; i++) {
    if (playerInput == null || playerInput == undefined) {
      break;
    } else {
      playRound();
      console.log(playerScore, computerScore);

      if (playerScore > computerScore) {
        console.log("You Win!");
      } else if (playerScore < computerScore) {
        console.log("You LOSE!");
      } else {
        console.log("Tie Game!");
      }
    }
    console.log("Canelled");
  }
};

*/
