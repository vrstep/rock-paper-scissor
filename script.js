let computerChoice = ['rock', 'paper', 'scissor'];

let playerSelection;
let computerSelection;

function getComputerChoice(computerChoice) {
    let rand = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[rand];
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection > computerSelection) {
//         console.log(`You win! ${playerSelection} beats ${computerSelection}`);
//     } else console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
// }

function playRound(playerSelection, computerSelection) {
    // In case player is winning
    if (playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('You win! Rock beats scissor');
    } 
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('You win! Scissor beats paper');
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock');
    }
    // In case computer is winning
    else if (computerSelection == 'rock' && playerSelection == 'scissor') {
        console.log('You lose! Rock beats scissor');
    }
    else if (computerSelection == 'scissor' && playerSelection == 'paper') {
        console.log('You lose! Scissor beats paper');
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log('You lose! Paper beats rock');
    }
    else console.log("It's a tie!");
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice").toLowerCase();
        console.log(playerSelection);
        computerSelection = getComputerChoice(computerChoice);
        console.log(computerSelection);
        console.log(`Round ${i}`);
        playRound(playerSelection, computerSelection);
    }
}

console.log(game())
