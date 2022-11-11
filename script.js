let computerChoice = ['rock', 'paper', 'scissors'];

let playerSelection = prompt("Enter your choice").toLowerCase();
console.log(playerSelection);
let computerSelection = getComputerChoice(computerChoice);

function getComputerChoice(computerChoice) {
    let rand = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[rand];
}

function playRound(playerSelection, computerSelection) {

}
