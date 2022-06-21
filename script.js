"use strict";

//start with function that has computer return rock paper or scissors
function computerPlay() {
    let playChoice = ['rock', 'paper', 'scissors'];
    return playChoice[Math.floor(Math.random() *3)]
}


let playerInput =function () {
    let input = prompt("Rock, Paper or Scissors?", "");
    if (input === null) {
        alert('Cancelled');
        return;} 
        let inputEdited = input.toLowerCase();
    if (inputEdited !== 'rock' && inputEdited !== 'paper' && inputEdited !== 'scissors') {
        alert('Invalid Answer');

    }
 else 
    return inputEdited

}

    /*
    .toLowerCase();
if (input !=== 'rock' ||input !=== 'paper' || input !=== 'scissors') {
    alert('Invaled Answer');
    return false
} else {
    return
}
}
*/
let playerScore =  0;
let computerScore = 0;




//User will input their choice
const playRound = function () {
let playerSelection = playerInput();
let computerSelection ;

// prompt("Rock, Paper or Scissors?", "").toLowerCase();
console.log(playerSelection);

if (playerSelection !== null && playerSelection !== undefined){
    computerSelection = computerPlay();
console.log(computerSelection);
} else {
    return;
}
//Return who wins
// return winner    
if (playerSelection == computerSelection){
    console.log('Draw!');
} else if (
    (playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection =='paper' && computerSelection == 'rock') ||
    (playerSelection =='scissors' && computerSelection == 'paper') 

        ){
            playerScore++;
            console.log( `You Win! ${playerSelection} beats ${computerSelection} `);
        } else {
            computerScore++;
            console.log( `You Lose! ${computerSelection} beats ${playerSelection} `);


        }

} 
    


//Do this for 5 rounds

let game = function(){
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        console.log('You Win!')
    } else if  (playerScore < computerScore){
        console.log('You LOSE!');
    } else {
        console.log('Tie Game!');
    }
}

game();

