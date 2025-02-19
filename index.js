const winner = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
let userScore = 0;
let computerScore = 0;

let userState = "";

function getComputerState() {
    const computerStates = ["rock", "paper", "scissors"];
    let stateIndex = Math.floor(Math.random() * 3);
    return computerStates[stateIndex];
}

function result() {
    let computerState = getComputerState();
    winner.style.visibility = "visible";
    if ((userState === "rock" && computerState === "scissors") ||
        (userState === "scissors" && computerState === "paper") ||
        (userState === "paper" && computerState === "rock")) {
        winner.innerHTML = "You win!";
        userScore += 1;
        userScoreElement.innerHTML = userScore;
    }
    else if ((computerState === "rock" && userState === "scissors") ||
        (computerState === "scissors" && userState === "paper") ||
        (computerState === "paper" && userState === "rock")) {
        winner.innerHTML = "You lose!";
        computerScore += 1;
        computerScoreElement.innerHTML = computerScore;
    }
    else {
        winner.innerHTML = "It's a tie!";
    }
}

function getUserState() {
    rock.onclick = function () {
        userState = "rock";
        result();
    };
    paper.onclick = function () {
        userState = "paper";
        result();
    };
    scissors.onclick = function () {
        userState = "scissors";
        result();
    };
}

getUserState();
