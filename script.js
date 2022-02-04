function computerPlay() {
  let play = Math.floor(Math.random() * 3);
  if (play === 1) {
    play = "rock";
  } else if (play === 2) {
    play = "paper";
  } else {
    play = "scissors";
  }
  return play;
}
function humanPlay() {
  play = prompt("Please select your play");
  play = play.toLowerCase();
  if (play !== "rock" && play !== "paper" && play !== "scissors") {
    humanPlay();
  }
  return play;
}

function RockPaperSicssors(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `tie ${playerSelection}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      humanScore++;
      return `You won, ${computerSelection} loses against ${playerSelection}`;
    } else {
      computerScore++;
      return `You lost, ${computerSelection} wins against ${playerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      humanScore++;
      return `You won, ${computerSelection} loses against ${playerSelection}`;
    } else {
      computerScore++;
      return `You lost, ${computerSelection} wins against ${playerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      humanScore++;
      return `You won, ${computerSelection} loses against ${playerSelection}`;
    } else {
      computerScore++;
      return `You lost, ${computerSelection} wins against {playerSelection}`;
    }
  }
}
let play = "";
let humanScore = 0;
let computerScore = 0;
for (let index = 0; index < 5; index++) {
  console.log(RockPaperSicssors(humanPlay(), computerPlay()));
  console.log(`Player = ${humanScore} || Computer = ${computerScore}`);
}
if (humanScore > computerScore) {
  alert("You Won!!");
} else if (humanScore == computerScore) {
  alert("It's a tie!!");
} else {
  alert("You lost!!");
}
