// Get Random Computer Choice
const choices = ['rock', 'paper', 'scissors'];
var computerChoice = "";
function getCompChoice() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice);
}