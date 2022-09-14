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
//Game Win function
function gameWin() {
    if (compScore === 5) {
        document.getElementById('final-result').textContent = "You Lose! Try again next time!";
        gameReset();
    }
    else if (playerScore === 5) {
        document.getElementById('final-result').textContent = "You Win! Its about time!";
        gameReset();
    }
    else {
        document.getElementById('final-result').textContent = "";
    }
}
//Reset function
function buttonReset(){
    compSelect.textContent = "";
    compScore = 0;
    playerScore = 0;
    playerScoreText.textContent = 0;
    compScoreText.textContent = 0;
    roundResults.textContent = "";
    document.getElementById('final-result').textContent = "";
    resetButton = document.getElementById('reset');
    resetButton.remove();
}
function gameReset() {
    let resultsCont = document.getElementById('final-cont');
    roundResults.classList.add('r-result');
    let resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'reset');
    resetButton.classList.add('reset-button');
    resetButton.textContent = "Reset";
    resultsCont.appendChild(resetButton);
    resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', ()=>{
        buttonReset();
    })
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
    gameWin();
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
