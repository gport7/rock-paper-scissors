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
        console.log("This round is a tie!");      
    } else if (computerSelection === "Rock" && playerSelection === "Scissors" ||
                computerSelection === "Scissors" && playerSelection === "Paper" ||
                computerSelection === "Paper" && playerSelection === "Rock") {
        console.log("Computer wins the round!");
        computerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Paper" ||
    playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player wins the round!");
        playerScore++;
    } else {
        console.log("Player! Please choose something appropriate!");
        playRound();
    }
    showScore();
}

//show score
function showScore () {
    console.log("Player: " + playerScore + ", Computer: " + computerScore);
}

//plays 5 rounds then reports the final score, or goes to a tie breaker
function play5Rounds () {
    for (let i = 1; i <=5; i++) {
        console.log("ROUND " + i + "!");
        playRound();
    }   
    if (playerScore > computerScore) {
        console.log("Player has won!")
    } else if (playerScore < computerScore) {
        console.log("Computer has won!")
    } else {
        while(playerScore === computerScore){
            console.log("TIE BREAKER!!!!!")
            playRound();
        }
    }
    console.log("FINAL RESULTS: PLAYER: " + playerScore + ", COMPUTER: " + computerScore);
}

play5Rounds();