// Computer picks rock paper or scissors from the array

const options = ['Rock', 'Paper', 'Scissors']; // options in an array

let computerScore;
let playerScore;

/* funtion to randomly generate computers choice */

function getComputerChoice(computerSelection) {
    return computerSelection = options[~~(Math.random()*options.length)]
}

/* Funtion to obtain user input
Asks user for their choice.  If it is anything other than rock, paper or scissors print error message and ask again.  
tolowercase changes the input to lowercase for validation but it will still output whatever the user wrote, i.e. Rock rock or ROCK.
*/

function getPlayerInput() {
    playerSelection = prompt("rock, paper or scissors?"); 
        if ((playerSelection.toLowerCase()=='rock')
          ||(playerSelection.toLowerCase()=='paper')
          ||(playerSelection.toLowerCase()=='scissors')) {
        } else {
        alert('That\'s not a valid choice.');
        getPlayerInput();
        }

        return playerSelection; // return the value entered to () 
}

/*  Funtion to work out winner
    added variables to this funtion.  console.log(declareResult(1,1)) passes the scores through to this function block, the values are worked on and then the result is returned.
*/
function declareResult(playerScore,computerScore) {       
    if (playerScore===computerScore) {
        alert(playerScore + '-' + computerScore + '\nIt\'s a Draw!');
        return playerScore + '-' + computerScore + '\nIt\'s a Draw!';
      } else if (playerScore>computerScore) {
        alert(playerScore + '-' + computerScore + '\nYou win!!');
        return playerScore + '-' + computerScore + '\nYou win!!';
      } else {
        alert(playerScore + '-' + computerScore + '\nYou lose. Better luck next time!');
        return playerScore + '-' + computerScore + '\nYou lose. Better luck next time!'
      }
    }


    function playGame () {
        computerScore = 0;
        playerScore = 0;
        for (let i=0; i<5; i++) {
            getPlayerInput();
        }
        console.log(declareResult());
    }