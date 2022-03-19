let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let rounds = 5;

const playerRock = document.querySelector('#player-rock');
const playerPaper = document.querySelector('#player-paper');
const playerScissors = document.querySelector('#player-scissors');
const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');

playerRock.addEventListener('click', (e) => playRound(e));
playerPaper.addEventListener('click', (e) => playRound(e));
playerScissors.addEventListener('click', (e) => playRound(e));

function animateButton (e) {
    
}

const playerRockIcon = document.querySelector('#player-rock');
const playerPaperIcon = document.querySelector('#player-paper');
const playerScissorsIcon = document.querySelector('#player-scissors');
const computerRockIcon = document.querySelector('#computer-rock');
const computerPaperIcon = document.querySelector('#computer-paper');
const computerScissorsIcon = document.querySelector('#computer-scissors');
// resets visual effects of a played round
function resetRound (e) {
    playerRockIcon.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    playerPaperIcon.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    playerScissorsIcon.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerRockIcon.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerPaperIcon.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerScissorsIcon.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
}

//computer chooses Rock, Paper, or Scissors randomly and returns the result
function computerPlay () {
    let randomNumber = Math.random ();
    let choice;
    if (randomNumber < 0.33) {
        choice = "rock";
    } else if (randomNumber < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log("Computer choice: " + choice);    
    return choice;
}

//play one round
function playRound (e) {
    resetRound(e);
    const playerIcon = document.querySelector('#' + e.target['id']);
    playerIcon.classList.add('player-clicked');
    playerSelection = e.target['id'].substring(7); //removes 'player-' from the id
    console.log("Player choice: " + playerSelection);
    computerSelection = computerPlay();
    const computerIcon = document.querySelector(`#computer-${computerSelection}`);
    computerIcon.classList.add('computer-clicked');
    if (computerSelection === playerSelection) {
        playerIcon.classList.add('tying-icon');
        computerIcon.classList.add('tying-icon');
        console.log("This round is a tie!");      
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
                computerSelection === "scissors" && playerSelection === "paper" ||
                computerSelection === "paper" && playerSelection === "rock") {
        console.log("Computer wins the round!");
        computerScore++;
        playerIcon.classList.add('losing-icon');
        computerIcon.classList.add('winning-icon');

    } else {
        console.log("Player wins the round!");
        playerScore++;
        playerIcon.classList.add('winning-icon');
        computerIcon.classList.add('losing-icon');
    } 
    showScore(playerSelection, computerSelection);
}

//show score
function showScore (playerSelection, computerSelection) {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
    const scoreText = document.querySelector('.score');
    scoreText.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

//plays rounds (based on rounds variable) then reports the final score, or goes to a tie breaker
function game (e) {
    console.log("Let the games begin!")
    for (let i = 1; i <= rounds; i++) {
        console.log("----------ROUND " + i + "!----------");
        playRound(e);
    }   
    while(playerScore === computerScore){
        rounds++;
        console.log("--------TIE BREAKER!--------");
        console.log("----------ROUND " + rounds + "!----------");
        playRound(e);
    }
    console.log("----------------------------");
    console.log("FINAL RESULTS: PLAYER: " + playerScore + ", COMPUTER: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player has won the whole game!");
    } else {
        console.log("Computer has won the whole game!");
    }
}