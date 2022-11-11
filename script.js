let computerChoice = ['rock', 'paper', 'scissors'];

let playerSelection = prompt("Enter your choice").toLowerCase();
let computerSelection = getComputerChoice(computerChoice);

function getComputerChoice(computerChoice) {
    let rand = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[rand];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
}

console.log(playRound(playerSelection, computerSelection));
