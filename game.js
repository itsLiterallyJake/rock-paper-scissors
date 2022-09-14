// Get Random Computer Choice
const choices = ['Rock', 'Paper', 'Scissors'];
var computerChoice = "";
var compSelect = document.getElementById('cpu-selection')
function getCompChoice() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    compSelect.textContent = computerChoice;
}

//Score tracker
var playerScore = 0;
var compScore = 0;
var playerScoreText = document.getElementById('player-score');
var compScoreText = document.getElementById('cpu-score');
function playerWins() {
    playerScore++
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = compScore;
}
function compWins() {
    compScore++
    playerScoreText.textContent = playerScore;
    compScoreText.textContent = compScore;
}


//Plays a Round
var roundResults = document.getElementById('round-result');
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        roundResults.textContent = "It's a tie!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper") {
        roundResults.textContent = "You lose, paper beats rock";
        compWins();
    }
    else if (playerChoice == 'Rock' && computerChoice == "Scissors") {
        roundResults.textContent = "You win! Rock beats scissors!";
        playerWins();
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        roundResults.textContent = "You win! Paper beats rock!";
        playerWins();
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        roundResults.textContent = "You lose, scissors beats paper";
        compWins();
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        roundResults.textContent = "You lose, rock beats scissors";
        compWins();
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        roundResults.textContent = "You Win! Scissors beats paper!";
        playerWins();
    }
}

document.getElementById('rock').addEventListener('click', function() {
    getCompChoice();
    playRound('Rock', computerChoice);
})
document.getElementById('paper').addEventListener('click' , ()=>{
    getCompChoice();
    playRound('Paper', computerChoice);
})
document.getElementById('scissors').addEventListener('click', ()=>{
    getCompChoice();
    playRound('Scissors', computerChoice);
})