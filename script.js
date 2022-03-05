let computerSelection;
let computerScore = 0;
let playerSelection;
let playerScore = 0;

//computer chooses Rock, Paper, or Scissors randomly and returns the result
function computerPlay () {
    let randomNumber = Math.random ();
    if (randomNumber < 0.33) {
        choice = "Rock";
    } else if (randomNumber < 0.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    console.log("Computer choice: " + choice);
    return choice;
}

//play one round
function playRound (computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    console.log("Player choice: " + playerSelection)
    computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        console.log("It's a tie!");
        showScore();
    } else if (computerSelection === "Rock" && playerSelection === "Scissors" ||
                computerSelection === "Scissors" && playerSelection === "Paper" ||
                computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("Computer wins!");
        computerScore++;
        showScore();
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player wins!");
        playerScore++;
        showScore();
    } else {
        console.log("Player is disqualified for choosing something other than the allowed items!");
    }
}

//show score
function showScore () {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
}

playRound();