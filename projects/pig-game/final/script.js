'use strict';

//Select elements
const score1El = document.getElementById('score--0'); //SCORE HELD 1
const score2El = document.getElementById('score--1'); //SCORE HELD 2
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const player1CurrScore = document.querySelector('#current--0'); //PLAYER 1 CURRENT SCORE
const player2CurrScore = document.querySelector('#current--1'); //PLAYER 2 CURRENT SCORE

const diceEl = document.querySelector('.dice'); //DICE IMAGE ELEMENT
const rollDiceButton = document.querySelector('.btn--roll'); //ROLL DICE BUTTON
const holdButton = document.querySelector('.btn--hold'); //HOLD BUTTON

//Starting conditions
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

//REUSABLE FUNCTIONS
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

//ONCLICK FUNCTIONS
rollDiceButton.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  // console.log(diceNumber);
  diceEl.src = `dice-${diceNumber}.png`;
  diceEl.classList.remove('hidden');
  if (diceNumber !== 1) {
    // currentScore = currentScore + diceNumber;
    currentScore += diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdButton.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
