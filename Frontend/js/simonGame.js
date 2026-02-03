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
  //random btn choose
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomIdx];
    let randomBtn = document.querySelector(`#${randomColor}`);
    gamePattern.push(randomColor);
  btnFlash(randomBtn);
}
//btn flash function
function btnFlash(btn) {
  btn.classList.add("flash");
  console.log("flashed");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 1000);    
}
