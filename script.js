const choices = ["rock", "paper", "scissor"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3) + 0];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  console.log("Computer Selected " + computerSelection);
  playerSelection = prompt("Your Choice");
  playerSelection = playerSelection.toLowerCase()
  console.log("Player Selected " + playerSelection);
  if (playerSelection == "rock" && computerSelection == "paper") {
    return console.log("Computer Win");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return console.log("player win");
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return console.log("player win");
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return console.log("Computer win");
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return console.log("Computer win");
  } else if (playerSelection == "scissor" && computerSelection == "paper")
    return console.log("player win");
  else console.log("No Winner");
}
