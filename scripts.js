    // Get computers choice
    function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        choice = "Rock";
        return choice;
    }
    else if (choice === 1) {
        choice = "Paper";
        return choice;
    }
    else {
        choice = "Scissors";
        return choice;
    }
}


// Function that receives computer choice and user choice, then calculates result of one game
function gameResult(computerChoice, userChoice) {
    computerChoice = computerChoice.toLowerCase();
    userChoice = userChoice.toLowerCase();
    console.log("Computer selected " + computerChoice);
    console.log("User selected " + userChoice);


    if (computerChoice === "rock") {
        if (userChoice === "paper") {
            console.log("You win! Your paper wraps around the rock and suffocates it!");
            return 2;
        }
        else if (userChoice === "scissors") {
            console.log("You lose! Their rock slams against your scissors and crushes it.");
            return 1;
        }
        else {
            console.log("Draw! You both come out unvictorious");
            return 0;
        }
        }
    else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            console.log("You lose! Their paper suffocated your rock");
            return 1;
        }
        else if (userChoice === "scissors") {
            console.log("You win! Your scissors slashed their paper in half");
            return 2;
        }
        else {
            console.log("Draw! You both come out unvictorious");
            return 0;
        }
    }
    else {
        if (userChoice === "rock") {
            console.log("You win! Your rock crushed their scissor into pieces");
            return 2;
        }
        else if (userChoice === "paper") {
            console.log("You lose! Their scissors slashed your paper");
            return 1;
        }
        else {
            console.log("Draw! You both come out unvictorious");
            return 0;
        }
    }
}


// Updates score and adds onto userScore and computerScore
function updateScore(result) {
    if (result === 2) {
        userScore += 1;
    }
    else if (result === 1) {
        computerScore += 1;
    }

    console.log("User Score: " + userScore);
    console.log("Computer Score: " + computerScore);
}


// function to play the game
function game() {
    let userChoice = prompt("What is your choice?");
    let result = gameResult(getComputerChoice(), userChoice);
    updateScore(result);


}

let userScore = 0;
let computerScore = 0;
let gameOn = true;
const scoreLimit = 5;

// loop that will keep on going until user or computer scores the scoreLimit points
while (gameOn) {
    game();
    if (computerScore >= scoreLimit || userScore >= scoreLimit) {
        gameOn = false;
    }
}
if (userScore > computerScore) {
    console.log("You defeated the computer!");
}
else {
    console.log("You were defeated by the almighty computer.");
}
