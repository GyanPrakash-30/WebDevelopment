let h2 = document.querySelector("h2");
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let buttonColors = ["red", "green", "blue", "yellow"];

//start the game
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  //random color choose
  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = buttonColors[randomIdx];
  let randomBtn = document.querySelector(`#${randomColor}`);
  gamePattern.push(randomColor);
  gameFlash(randomBtn);
}
//btn gameFlash function
function gameFlash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 250);
}

//user click btn
let btns = document.querySelectorAll(".color-button");
for (let btn of btns) {
  btn.addEventListener("click", btnPressed);
}

function btnPressed() {
  let userPressBtn = this;
  userFlash(userPressBtn);
  let userChosenColor = userPressBtn.id;
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

//check answer
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(levelUp, 1000);
      userClickedPattern = [];
    }
  } else {
    h2.innerHTML = `Game Over, your score was <b style="color: red;">${level}</b>. <br>Press Any Key to Restart`;
    let body = document.querySelector("body");
    body.classList.add("gameover");
    setTimeout(function () {
      body.classList.remove("gameover");
    }, 200);
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    console.log("wrong");
  }
}
//add high score feature
// let highScore = 0;
// function updateHighScore() {
//   if (level > highScore) {
//     highScore = level;
//     let highScoreDisplay = document.querySelector("#high-score");
//     highScoreDisplay.innerText = `High Score: ${highScore}`;
//   }
// }