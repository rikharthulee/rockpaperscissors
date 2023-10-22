// Computer picks rock paper or scissors from the array

const options = ['Rock', 'Paper', 'Scissors']; // options in an array

function getComputerChoice() {
    return options[~~(Math.random()*options.length)]
}

const computerSelection = getComputerChoice()




let userSelection = prompt("Rock, Paper or Scissors?"); //ask user for their selection

console.log(computerSelection);
console.log(userSelection)

