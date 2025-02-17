const winner = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let userState = "";

function getComputerState() {
    const computerStates = ["rock", "paper", "scissors"];
    let stateIndex = Math.floor(Math.random() * 3);
    return computerStates[stateIndex];
}

function result() {
    let computerState = getComputerState();

    if ((userState === "rock" && computerState === "scissors") ||
        (userState === "scissors" && computerState === "paper") ||
        (userState === "paper" && computerState === "rock")) {
        winner.innerHTML = "You win!";
    }
    else if ((computerState === "rock" && userState === "scissors") ||
        (computerState === "scissors" && userState === "paper") ||
        (computerState === "paper" && userState === "rock")) {
        winner.innerHTML = "You lose!";
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

// Вызываем, чтобы установить обработчики событий при загрузке страницы
getUserState();
