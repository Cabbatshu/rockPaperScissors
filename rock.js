let array = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerChoice, computerSelection) {
  console.log("Computer selection: " + computerSelection);
  console.log("Player selection: " + playerChoice.toLowerCase());

  if (playerChoice == "rock" && computerSelection == "scissors") {
    console.log("Player wins!");
  } else if (playerChoice == "rock" && computerSelection == "paper") {
    console.log("Computer wins!");
  } else if (playerChoice == "scissors" && computerSelection == "paper") {
    console.log("Player wins!");
  } else if (playerChoice == "scissors" && computerSelection == "rock") {
    console.log("Computer wins!");
  } else if (playerChoice == "paper" && computerSelection == "rock") {
    console.log("Player wins!");
  } else if (playerChoice == "paper" && computerSelection == "scissors") {
    console.log("Computer wins!");
  } else if (playerChoice == computerSelection) {
    console.log("Draw!");
  }
}

playRound("ROCK", getComputerChoice());
