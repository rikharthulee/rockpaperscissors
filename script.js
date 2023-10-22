// Computer picks rock paper or scissors from the array

const options = ['Rock', 'Paper', 'Scissors']; // options in an array
let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

function getComputerChoice() {
    return options[~~(Math.random()*options.length)]
};

computerSelection = getComputerChoice();


function playerInput () { //ask user for their selection.  If it is anything other than lowercase, print error message and ask again.
    playerSelection = prompt("rock, paper or scissors?"); 
        if ((playerSelection.toLowerCase()=='rock')
            ||(playerSelection.toLowerCase()=='paper')
            ||(playerSelection.toLowerCase()=='scissors')) {
        } else {
        alert('That\'s not a valid choice.');
        playerInput();
        }
}


playerInput()

console.log(computerSelection);
console.log(playerSelection);
console.log(computerScore);
console.log(playerScore);