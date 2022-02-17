let optionsPlayer = document.querySelectorAll("div.options > div");
let optionsComputer = document.querySelectorAll("div.comp> div");
let player = document.getElementById("human-play");
let computer = document.getElementById("comp-play");
let play = 0;
let playerScore = 0;
let computerScore = 0;
let playerScoreLabel = document.getElementById("player-score");
let computerScoreLabel = document.getElementById("comp-score");
optionsPlayer.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("selected");

    mostrar(item.innerHTML, "player");
    if (item == optionsPlayer[1]) {
      play = 1;
    }
    if (item == optionsPlayer[2]) {
      play = 2;
    }
    if (item == optionsPlayer[0]) {
      play = 0;
    }
    setTimeout(function () {
      item.classList.remove("selected");
    }, 500);
    rps(play, computerPlay());
    if (playerScore == 5) {
      Swal.fire({
        title: "You win!",
        confirmButtonColor: "#f1d00a",
        confirmButtonText: "Play again",
      }).then((result) => {
        if (result.isConfirmed) {
          playerScore = 0;
          computerScore = 0;
          playerScoreLabel.innerHTML = 0;
          computerScoreLabel.innerHTML = 0;
          player.innerHTML = "";
          computer.innerHTML = "";
        }
      });
    }
    if (computerScore == 5) {
      Swal.fire({
        title: "You lose!",
        confirmButtonColor: "#f1d00a",
        confirmButtonText: "Play again",
      }).then((result) => {
        if (result.isConfirmed) {
          playerScore = 0;
          computerScore = 0;
          playerScoreLabel.innerHTML = 0;
          computerScoreLabel.innerHTML = 0;
          player.innerHTML = "";
          computer.innerHTML = "";
        }
      });
    }
  });
});

function mostrar(item, user) {
  if (user === "player") {
    player.innerHTML = item;
    player.classList.add("selected");
    setTimeout(function () {
      player.classList.remove("selected");
    }, 500);
  } else {
    computer.innerHTML = item;
    computer.classList.add("selected");
    setTimeout(function () {
      computer.classList.remove("selected");
    }, 500);
  }
}

function computerPlay() {
  let playc = Math.floor(Math.random() * 3);
  if (playc === 1) {
    mostrar(optionsPlayer[0].innerHTML, "comp");
    playc = 0;
    return playc;
  } else if (playc === 2) {
    mostrar(optionsPlayer[1].innerHTML, "comp");
    playc = 1;
    return playc;
  } else {
    mostrar(optionsPlayer[2].innerHTML, "comp");
    playc = 2;
    return playc;
  }
}
function rps(playh, playc) {
  if (playh === playc) {
    console.log("tie");
  } else if (playh === 0) {
    if (playc === 2) {
      playerScore++;
      playerScoreLabel.innerHTML = playerScore;
    } else {
      computerScore++;
      computerScoreLabel.innerHTML = computerScore;
    }
  } else if (playh === 1) {
    if (playc === 0) {
      playerScore++;
      playerScoreLabel.innerHTML = playerScore;
    } else {
      computerScore++;
      computerScoreLabel.innerHTML = computerScore;
    }
  } else if (playh === 2) {
    if (playc === 1) {
      playerScore++;
      playerScoreLabel.innerHTML = playerScore;
    } else {
      computerScore++;
      computerScoreLabel.innerHTML = computerScore;
    }
  }
}
