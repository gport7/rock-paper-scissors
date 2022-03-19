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





//computer chooses Rock, Paper, or Scissors randomly and returns the result
function computerPlay () {
    const computerRockIcon = document.querySelector('#computer-rock');
    const computerPaperIcon = document.querySelector('#computer-paper');
    const computerScissorsIcon = document.querySelector('#computer-scissors');
    computerRockIcon.classList.remove('clicked');
    computerPaperIcon.classList.remove('clicked');
    computerScissorsIcon.classList.remove('clicked');
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
    const computerIcon = document.querySelector(`#computer-${choice}`);
    computerIcon.classList.add('clicked');
    return choice;
}

//play one round
function playRound (e) {
    const playerIcon = document.querySelector('#' + e.target['id']);
    // playerIcon.classList.add('clicked');
    playerSelection = e.target['id'].substring(7); //removes 'player-' from the id
    console.log("Player choice: " + playerSelection);
    computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        console.log("This round is a tie!");      
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
                computerSelection === "scissors" && playerSelection === "paper" ||
                computerSelection === "paper" && playerSelection === "rock") {
        console.log("Computer wins the round!");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins the round!");
        playerScore++;
    } 
    showScore();
}

//show score
function showScore () {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
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