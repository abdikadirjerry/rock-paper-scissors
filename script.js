const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const playerChoice = button.textContent;

    console.log("Player chose:", playerChoice);
  });
});
