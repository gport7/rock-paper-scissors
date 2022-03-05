let computerSelection;

function computerPlay () {
    randomNumber = Math.random ();
    if (randomNumber < 0.33) {
        computerSelection = "Rock";
    } else if (randomNumber < 0.66) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(computerSelection);
    return computerSelection;
}

computerPlay();