const options = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;
let displayResult = '';

function getComputerInput() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerInput() {
  let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  
  if (options.includes(playerSelection)) {
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
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerInput();
    const computerSelection = getComputerInput();
    playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: Player chose ${playerSelection}, Computer chose ${computerSelection}, Result: ${displayResult}`);
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