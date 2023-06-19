'use strict';
/*************** Selecting elemnets */
// dispaly
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

// buttons
const btnRules = document.querySelector('.btn--rules');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let score = 0;

/******************* Functions */
//Genarate random number 1-6
function ganarateRandomNumber() {
  const randomNumber = Math.random() * 6 + 1;
  return Math.floor(randomNumber);
}

//Display the dice
function rollTheDice() {
  const dice = ganarateRandomNumber();
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }
  diceEl.setAttribute('src', `./img/dice-${dice}.png`);

  if (dice !== 1) {
    score += dice;
    currentScore0.textContent = score;
  } else {
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
  }
}

/******************* Event listeners */
// ROLL DICE
btnRoll.addEventListener('click', rollTheDice);
