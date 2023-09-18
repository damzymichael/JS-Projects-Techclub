'use strict';
const scores = [0, 0];

//Select elements
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
// console.log(rollDiceButton);

//Starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

rollDiceButton.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  // console.log(diceNumber);
  diceEl.src = `dice-${diceNumber}.png`;
  diceEl.classList.remove('hidden');
});

