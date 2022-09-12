//Global variables
const choices = ['rock', 'paper', 'scissors'];
const roundResult = document.getElementById('round-result');
const playerScoreTracker = document.getElementById('player-score');
const cpuScoreTracker = document.getElementById('cpu-score');
var playerChoice = "";
var computerChoice = "";
var playerScore = 0;
var computerScore = 0;


//Gets Computer Selection
function getCompChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}

//Plays a round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundResult.textContent = "It's a tie, try again!";
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        roundResult.textContent = "You lose! Paper beats Rock!";
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        roundResult.textContent = "You Win! Rock beats scissors!";
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        roundResult.textContent = "You Win! Paper beats rock!";
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        roundResult.textContent = "You lose! Scissors beats paper!";
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        roundResult.textContent = "You Lose! Rock beats scissors!";
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        roundResult.textContent = "You Win! Scissors beats paper!";
    }
}

//Score tracker
function addCompScore() {
    computerScore++;
    cpuScoreTracker.textContent = computerScore;
}
function addPlayerScore() {
    playerScore++;
    playerScoreTracker.textContent = playerScore;
}