// console.log(document.querySelector('.message'))
// document.querySelector(".message").textContent = 'Anu'
// document.querySelector(".score").textContent = "30";
// console.log(document.querySelector('.guess').value)
// document.querySelector(".guess").value = 45

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const btn = document.querySelector(".check");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
let score = 20;
const scoreDisplay = document.querySelector(".score");
scoreDisplay.textContent = score;

// console.log(message)

function btnClick() {
  const guess = Number(input.value);
  if (!guess) {
    message.textContent = "❌ No number";
  } else if (guess > secretNumber) {
    message.textContent = "Too high ❗";
    score--;
    scoreDisplay.textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "Too low ❗";
    score--;
    scoreDisplay.textContent = score;
  } else if (guess === secretNumber) {
    message.textContent = "You win 💯";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    // const highScore = Number(document.querySelector(".highscore").textContent);
    // if (score > highScore) {
    //   document.querySelector(".highscore").textContent = score;
    // }
  }
}
btn.addEventListener("click", btnClick);
