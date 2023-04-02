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

function playAgain() {
    const replay = document.querySelector(".replay-button");
    replay.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        const container = document.querySelector("#scoreboard-container");
        container.classList.remove("gameOverMessage");
        container.removeChild(replay);
        const message = document.querySelector(".message");
        container.removeChild(message);

        const imgParent = document.querySelector(".result");
        const playerChoice = document.createElement('img');
        playerChoice.setAttribute('id', 'player-choice');
        const computerChoice = document.createElement('img');
        computerChoice.setAttribute('id', 'computer-choice');

        imgParent.appendChild(playerChoice);
        imgParent.appendChild(computerChoice);

        const scoreContainer = document.querySelector(".score")
        const humanScore = document.createElement("div");
        const aiScore = document.createElement("div");
        humanScore.setAttribute('id', 'human');
        humanScore.classList.add("scores");
        aiScore.setAttribute('id', 'computer');
        aiScore.classList.add('scores');
        humanScore.textContent = `HUMANS: ${userScore}`;
        aiScore.textContent = `AI: ${computerScore}`;

        scoreContainer.appendChild(humanScore);
        scoreContainer.appendChild(aiScore);
        
        playButtons.forEach((button) => {
            document.querySelector(`#${button.id}`).disabled = false;
        })
    })

}

function removeScoreUI () {
    const parent = document.querySelector(".result");
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
        parent.removeChild(img);
    })
    const scores = document.querySelectorAll(".scores");
    const scoreParent = document.querySelector(".score");
    scores.forEach((score) => {
        scoreParent.removeChild(score);
    })
    
    const container = document.querySelector("#scoreboard-container");
    container.classList.add("gameOverMessage");
    
}


function endGame(userScore, computerScore) {
    const scoreContainer = document.querySelector('#scoreboard-container');
    if (userScore === 5 || computerScore === 5) {
        const message = document.createElement('div');
        if (userScore > computerScore) {
            message.textContent = "YOU WIN!";
        }
        else {
            message.textContent = "YOU LOSE!";
        }
        message.classList.add("message");
        removeScoreUI();
        scoreContainer.appendChild(message);

        const replay = document.createElement('button');
        replay.textContent = "Play again?";
        replay.classList.add("replay-button");
        scoreContainer.appendChild(replay);

        playButtons = document.querySelectorAll(".button")
        playButtons.forEach((button) => {
            document.querySelector(`#${button.id}`).disabled = true;
        })
        playAgain();
    }

}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove('pop-out');
}

// Function that receives computer choice and user choice, then calculates result of one game
function gameResult(computerChoice, userChoice) {
    computerChoice = computerChoice.toLowerCase();
    userChoice = userChoice.toLowerCase();

    updateImage(userChoice, computerChoice);
    const img = document.querySelectorAll("img");
    img.forEach((img) => {
        document.querySelector(img.id);
        img.classList.add('pop-out');
        img.addEventListener('transitionend', removeTransition);
    });


    if (computerChoice === "rock") {
        if (userChoice === "paper") {
            return updateScore(2);
        }
        else if (userChoice === "scissors") {
            return updateScore(1);
        }
        else {
            return updateScore(0);
        }
        }
    else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            return updateScore(1);
        }
        else if (userChoice === "scissors") {
            return updateScore(2);
        }
        else {
            return updateScore(0);
        }
    }
    else {
        if (userChoice === "rock") {
            return updateScore(2);
        }
        else if (userChoice === "paper") {

            return updateScore(1);
        }
        else {
            return updateScore(0);
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


    const humans = document.querySelector("#human");
    humans.textContent = `HUMANS: ${userScore}`;

    const computer = document.querySelector("#computer");
    computer.textContent = `AI: ${computerScore}`;

}


// function to play the game
function game() {
    let userChoice = prompt("What is your choice?");
    let result = gameResult(getComputerChoice(), userChoice);
    updateScore(result);

}

function updateImage(user, computer) {
    const userImage = document.querySelector("#player-choice");
    const computerImage = document.querySelector("#computer-choice");

    if (user === "rock") {
        userImage.src = "./images/the-rock.jpg";
    }
    else if (user === "paper") {
        userImage.src = "./images/paper.png";
    }
    else {
        userImage.src = "./images/scissors.png";
    }

    if (computer === "rock") {
        computerImage.src = "./images/the-rock.jpg";
    }
    else if (computer === "paper") {
        computerImage.src = "./images/paper.png";
    }
    else {
        computerImage.src = "./images/scissors.png";
    }
}

let userScore = 0;
let computerScore = 0;
let gameOn = true;
const scoreLimit = 5;

// loop that will keep on going until user or computer scores the scoreLimit points
/*while (gameOn) {
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
*/

// SCRIPTS

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    gameResult(getComputerChoice(), "rock")
    endGame(userScore, computerScore);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    gameResult(getComputerChoice(), "paper")
    endGame(userScore, computerScore);
});

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {gameResult(getComputerChoice(), "scissors")
    endGame(userScore, computerScore);
});

