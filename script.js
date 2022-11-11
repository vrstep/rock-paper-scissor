let computerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice(computerChoice) {
    let rand = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[rand];
}

console.log(getComputerChoice(computerChoice));