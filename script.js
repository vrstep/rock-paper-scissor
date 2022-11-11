function getComputerChoice(computerChoice) {
    let rand = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[rand];
}

let computerChoice = ['rock', 'paper', 'scissors'];

console.log(getComputerChoice(computerChoice));