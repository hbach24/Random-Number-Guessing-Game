"use strict";

let randomNum = Math.trunc(Math.random() * 25) + 1;
// console.log(randomNum);

let score = 15;
let best = 0;
function modifyPrompt(prompt) {
  document.querySelector(".prompt").textContent = prompt;
}

function deductCurrentScore() {
  score--;
  document.querySelector(".score").textContent = score;
}

function updateBestScore() {
  if (score > best) {
    best = score;
    document.querySelector(".best").textContent = score;
  }
}

document.querySelector(".enter").addEventListener("click", function () {
  const val = document.querySelector(".guess").value;

  if (!val) {
    //if a number is not entered
    modifyPrompt("No number!");
  } else if (val < randomNum) {
    //if number is smaller than target
    if (score >= 1) {
      deductCurrentScore();
    }

    if (score < 1) {
      modifyPrompt("You lost! Click Replay to try again!");
    } else {
      modifyPrompt("Aim higher!");
    }
  } else if (val > randomNum) {
    //if number is bigger than target
    if (score >= 1) {
      deductCurrentScore();
    }
    if (score < 1) {
      modifyPrompt("You lost! Click Replay to try again!");
    } else {
      modifyPrompt("Aim lower!");
    }
  } else if (Number(val) === randomNum) {
    //if target is found
    modifyPrompt("🥳HURRAH!!!🎉");
    document.querySelector(".num").textContent = randomNum; //update question mark when found
    updateBestScore();
    document.querySelector("body").style.backgroundColor = "#c4f5c4";
  }
});

document.querySelector(".replay").addEventListener("click", function () {
  //reset prompt, current score, background color, generate new randomNum
  score = 15;
  modifyPrompt("Make a guess!");
  document.querySelector(".score").textContent = 15;
  document.querySelector(".num").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "lavenderblush";
  randomNum = Math.trunc(Math.random() * 25) + 1;
  //console.log(randomNum);
});
