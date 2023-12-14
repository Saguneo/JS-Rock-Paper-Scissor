const modalMessage = document.getElementById("modal-message");
const overlay = document.getElementById("overlay");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerpic = document.getElementById("player-pic");
const comppic = document.getElementById("comp-pic");
let playerpoint = document.getElementById("player-point");
let comppoint = document.getElementById("comp-point");
let winnerMessage = document.getElementById("winner-message");
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      comppic.src = "./images/rock.png";
      return "rock";
    case 1:
      comppic.src = "./images/paper.png";
      return "paper";
    case 2:
      comppic.src = "./images/scissor.png";
      return "scissors";
  }
}

function playRps(player, comp) {
  if (player === comp) {
    winnerMessage.textContent = "It's a tie!";
  } else if (
    (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") ||
    (player === "scissors" && comp === "paper")
  ) {
    playerScore++;
    playerpoint.textContent = `Player: ${playerScore}`;
    winnerMessage.textContent = "You win!";
  } else {
    winnerMessage.textContent = "You lost!";
    compScore++;
    comppoint.textContent = `AI: ${compScore}`;
  }

  if (playerScore === 5) {
    showModal("Won!");
  } else if (compScore === 5) {
    showModal("Lost..");
  }
}

function showModal(message) {
  overlay.classList.remove("hidden");
  modalMessage.textContent = `You ${message}`;
}

function resetAll() {
  playerScore = 0;
  compScore = 0;
  playerpic.src = "./images/user.png";
  comppic.src = "./images/robot.png";
  playerpoint.textContent = "Player: 0";
  comppoint.textContent = "AI: 0";
  overlay.classList.add("hidden");
}

rock.addEventListener("click", function () {
  playRps("rock", getComputerChoice());
  playerpic.src = "./images/rock.png";
});

paper.addEventListener("click", function () {
  playRps("paper", getComputerChoice());
  playerpic.src = "./images/paper.png";
});

scissor.addEventListener("click", function () {
  playRps("scissors", getComputerChoice());
  playerpic.src = "./images/scissor.png";
});
