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

let scores, currentScore, activePlayer, playing;

/******************* Functions */

newGame();

function newGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
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

//Genarate random number 1-6
function ganarateRandomNumber() {
  const randomNumber = Math.random() * 6 + 1;
  return Math.floor(randomNumber);
}

function rollTheDice() {
  if (playing) {
    const dice = ganarateRandomNumber();
    //display the dice
    diceEl.classList.remove('hidden');
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

/******************* Event listeners */
btnRoll.addEventListener('click', rollTheDice);
btnHold.addEventListener('click', addToScore);
btnNew.addEventListener('click', newGame);
