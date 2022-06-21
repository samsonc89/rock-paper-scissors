"use strict";

//start with function that has computer return rock paper or scissors
function computerPlay() {
    let playChoice = ['rock', 'paper', 'scissors'];
    return playChoice[Math.floor(Math.random() *3)]
}

let playerScore =  0;
let computerScore = 0;
console.log(playerScore, computerScore);

//User will input their choice
const playRound = function () {
let playerSelection = 'paper'
// prompt("Rock, Paper or Scissors?", "").toLowerCase();
console.log(playerSelection);


let computerSelection = computerPlay();
console.log(computerSelection);
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
            console.log( `You Win! `);
        } else {
            computerScore++;
            console.log('You Lose!');


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
