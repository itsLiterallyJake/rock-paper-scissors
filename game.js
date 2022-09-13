// Get Random Computer Choice
const choices = ['Rock', 'Paper', 'Scissors'];
var computerChoice = "";
var compSelect = document.getElementById('cpu-selection')
function getCompChoice() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    compSelect.textContent = computerChoice;
}

//Plays a Round
var roundResults = document.getElementById('round-result');
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        roundResults.textContent = "It's a tie!";
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper") {
        roundResults.textContent = "You lose, paper beats rock";
    }
    else if (playerChoice == 'Rock' && computerChoice == "Scissors") {
        roundResults.textContent = "You win! Rock beats scissors!";
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        roundResults.textContent = "You win! Paper beats rock!";
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        roundResults.textContent = "You lose, scissors beats paper";
    }
    else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        roundResults.textContent = "You lose, rock beats scissors";
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        roundResults.textContent = "You Win! Scissors beats paper!";
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