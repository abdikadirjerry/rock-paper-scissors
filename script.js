const buttons = document.querySelectorAll("button");

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const playerChoice = button.textContent;
    const computerChoice = getComputerChoice();

    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
  });
});
