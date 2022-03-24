let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;
let rounds = 5;

const roundsStatus = document.querySelector('.round-status');

const playerRock = document.querySelector('#player-rock');
const playerPaper = document.querySelector('#player-paper');
const playerScissors = document.querySelector('#player-scissors');
const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');

playerRock.addEventListener('click', (e) => playRound(e));
playerPaper.addEventListener('click', (e) => playRound(e));
playerScissors.addEventListener('click', (e) => playRound(e));

// resets visual effects of a played round
function resetRound (e) {
    playerRock.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    playerPaper.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    playerScissors.classList.remove('player-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerRock.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerPaper.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
    computerScissors.classList.remove('computer-clicked', 'tying-icon', 'winning-icon', 'losing-icon');
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
    document.body.style.backgroundColor = 'black';
    roundCounter++;
    roundsStatus.textContent = `Round ${roundCounter}: `;
    resetRound(e);
    const playerIcon = document.querySelector('#' + e.target['id']);
    playerIcon.classList.add('player-clicked');
    playerSelection = e.target['id'].substring(7); //removes 'player-' from the id
    computerSelection = computerPlay();
    const computerIcon = document.querySelector(`#computer-${computerSelection}`);
    computerIcon.classList.add('computer-clicked');
    if (computerSelection === playerSelection) {
        console.log("This round is a tie!");      
        playerIcon.classList.add('tying-icon');
        computerIcon.classList.add('tying-icon');
        roundsStatus.textContent += 'This round is a tie!';
    } else if (computerSelection === "rock" && playerSelection === "scissors" ||
                computerSelection === "scissors" && playerSelection === "paper" ||
                computerSelection === "paper" && playerSelection === "rock") {
        console.log("Computer wins the round!");
        computerScore++;
        playerIcon.classList.add('losing-icon');
        computerIcon.classList.add('winning-icon');
        roundsStatus.textContent += `Computer's ${computerSelection} beats player's ${playerSelection}. Computer wins the round!`;
    } else {
        console.log("Player wins the round!");
        playerScore++;
        playerIcon.classList.add('winning-icon');
        computerIcon.classList.add('losing-icon');
        roundsStatus.textContent += `Player's ${playerSelection} beats computer's ${computerSelection}. Computer wins the round!`;
    } 
    showScore(playerSelection, computerSelection);
}

//show score
function showScore (playerSelection, computerSelection) {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
    const scoreText = document.querySelector('.score');
    scoreText.textContent = `Computer-${computerScore}, Player-${playerScore}`;
    if (playerScore === 5) {
        winGame("Player"); 
    } else if (computerScore == 5) {
        winGame("Computer");
    }
}

//win game
function winGame (winner) {
    document.body.style.backgroundColor = 'green';
    roundsStatus.textContent = `${winner} wins the game in ${roundCounter} rounds!`
    computerScore = 0;
    playerScore = 0;
    roundCounter = 0;
}