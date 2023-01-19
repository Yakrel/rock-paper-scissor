const choices = ["rock", "paper", "scissor"];
let playerWins = 0;
let computerWins = 0;
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log("Player Score = " + playerWins);
    console.log("Computer Score = " + computerWins);
  }
}

function playRound(playerSelection, computerSelection) {
  function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3) + 0];
  }
  computerSelection = getComputerChoice();
  console.log("Computer Selected " + computerSelection);
  playerSelection = prompt("Your Choice");
  playerSelection = playerSelection.toLowerCase();
  console.log("Player Selected " + playerSelection);
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerWins++;
    return console.log("Computer Win");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWins++;
    return console.log("player win");
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    playerWins++;
    return console.log("player win");
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    computerWins++;
    return console.log("Computer win");
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    computerWins++;
    return console.log("Computer win");
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    playerWins++;
    return console.log("player win");
  } else console.log("No Winner");
}
