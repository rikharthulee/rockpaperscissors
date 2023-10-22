/*This version has had a little bit of help from "Steve" aka ChatGPT.  */

const options = ['rock', 'paper', 'scissors']; //array for choices

let computerScore = 0;
let playerScore = 0;
let displayResult = '';

function getComputerInput() {  //computer makes a selection from the array
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerName (playerName) {
  playerName = prompt("What is your name?");  // user is asked for their name

  return playerName;
}

function getPlayerInput() {  
  let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();  // user is asked for their selection
  if (options.includes(playerSelection)) {  //Steve has tidied up code here.  No need for 3 if statements.  
    return playerSelection;
  } else {
    alert("That's not a valid choice.");
    return getPlayerInput();
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    displayResult = 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    displayResult = 'player';
  } else {
    computerScore++;
    displayResult = 'computer';
  }
}

function game() {
    const playerName = getPlayerName();             //declare playerName variable withing game function
  for (let i = 0; i < 5; i++) {                     //begin loop for 5 rounds
    const playerSelection = getPlayerInput();       //define player selection variable and get value from function
    const computerSelection = getComputerInput();   //define computer selection variable and get value from function
    playRound(playerSelection, computerSelection);  //playRound function within game function
    console.log(`Round ${i + 1}: ${playerName} chose ${playerSelection}, Computer chose ${computerSelection}, Result: ${displayResult}`);  //need to learn exactly what Steve has done here
  }

  console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('Player wins the game!');
  } else if (computerScore > playerScore) {
    console.log('Computer wins the game!');
  } else {
    console.log('It\'s a draw!');
  }
}

// Start the game
game();