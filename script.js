// Computer picks rock paper or scissors from the array

const options = ['Rock', 'Paper', 'Scissors']; // options in an array

function getComputerChoice() {

    // get random number from 0 to total of items in the array.  If more items are added, they will be automatically included.
    const randomIndex = Math.floor(Math.random() * options.length);

    // get random choice
    const choice = options[randomIndex]; 

    return choice;
}



console.log(getComputerChoice());