let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let rounds = 5;

//computer chooses Rock, Paper, or Scissors randomly and returns the result
function computerPlay () {
    let randomNumber = Math.random ();
    let choice;
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

//player chooses Rock, Paper, or Scissors in a non-case-sensitive way
function playerPlay () {
    let input = prompt("Rock, Paper, or Scissors?");
    let choice;
    if (input.length === 0) {
        choice = input;
    } else {
        choice = input[0].toUpperCase() + input.substring(1).toLowerCase();
    }
    console.log("Player choice: " + choice)
    return choice;
}

//play one round
function playRound () {
    playerSelection = playerPlay();
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

//plays rounds (based on rounds variable) then reports the final score, or goes to a tie breaker
function game () {
    console.log("Let the games begin!")
    for (let i = 1; i <= rounds; i++) {
        console.log("----------ROUND " + i + "!----------");
        playRound();
    }   
    while(playerScore === computerScore){
        rounds++;
        console.log("--------TIE BREAKER!--------");
        console.log("----------ROUND " + rounds + "!----------");
        playRound();
    }
    console.log("----------------------------");
    console.log("FINAL RESULTS: PLAYER: " + playerScore + ", COMPUTER: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player has won the whole game!");
    } else {
        console.log("Computer has won the whole game!");
    }
}

game();