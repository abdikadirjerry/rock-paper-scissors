const buttons = document.querySelectorAll("button");

const choices = ["Rock", "Paper", "Scissors"];

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

    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(result);
  });
});
