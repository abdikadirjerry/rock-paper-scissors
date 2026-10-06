const buttons = document.querySelectorAll(".choices button");

const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultMessage = document.querySelector("#result-message");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const resetButton = document.querySelector("#reset-button");

const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }

  return "Computer wins!";
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const playerChoice = button.textContent;
    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    resultMessage.textContent = result;

    if (result === "You win!") {
      playerScore++;
    }

    if (result === "Computer wins!") {
      computerScore++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

resetButton.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  playerChoiceDisplay.textContent = "You chose: -";
  computerChoiceDisplay.textContent = "Computer chose: -";
  resultMessage.textContent = "Choose your weapon!";
});
