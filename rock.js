// let array = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   return array[Math.floor(Math.random() * array.length)];
// }

// function playRound(playerChoice, computerSelection) {
//   console.log("Computer selection: " + computerSelection);
//   console.log("Player selection: " + playerChoice.toLowerCase());

//   if (playerChoice == "rock" && computerSelection == "scissors") {
//     console.log("Player wins!");
//   } else if (playerChoice == "rock" && computerSelection == "paper") {
//     console.log("Computer wins!");
//   } else if (playerChoice == "scissors" && computerSelection == "paper") {
//     console.log("Player wins!");
//   } else if (playerChoice == "scissors" && computerSelection == "rock") {
//     console.log("Computer wins!");
//   } else if (playerChoice == "paper" && computerSelection == "rock") {
//     console.log("Player wins!");
//   } else if (playerChoice == "paper" && computerSelection == "scissors") {
//     console.log("Computer wins!");
//   } else if (playerChoice == computerSelection) {
//     console.log("Draw!");
//   }
// }
// playRound("ROCK", getComputerChoice());

// const rockBtn = document.getElementById("rockBtn");
// rockBtn.addEventListener("click", function (e) {
//   document.body.innerHTML = "hfdjks";
// });

// // _______________________________________________________
// const paperBtn = document.getElementById("paperBtn");

// // _______________________________________________________________
// const scissorsBtn = document.getElementById("scissorsBtn");

function myFunction() {
  document.getElementById("myH2").style.color = "#ff0000";
  document.getElementById("myP").style.color = "magenta";
  document.getElementById("myP2").style.color = "blue";
  document.getElementById("myDiv").style.color = "lightblue";
  document.getElementById("myDiv").classList.add("lol");
}
