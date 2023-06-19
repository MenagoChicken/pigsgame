'use strict';
/*************** Selecting elemnets */
// dispaly
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// buttons
const btnRules = document.querySelector('.btn--rules');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

/******************* Functions */
//Genarate random number 1-6
function ganarateRandomNumber() {
  const randomNumber = Math.random() * 6 + 1;
  return Math.floor(randomNumber);
}

//Display the dice
function rollTheDice() {
  if (playing) {
    const dice = ganarateRandomNumber();
    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }
    diceEl.setAttribute('src', `./img/dice-${dice}.png`);

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}

function addToScore() {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
  // Set set current scores to 0
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

/******************* Event listeners */
btnRoll.addEventListener('click', rollTheDice);
btnHold.addEventListener('click', addToScore);
