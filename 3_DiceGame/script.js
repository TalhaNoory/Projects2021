'use strict';

// Selecting elements
const player0_El = document.querySelector('.player--0');
const player1_El = document.querySelector('.player--1');

const score0_El = document.querySelector('#score--0');
const score1_El = document.getElementById('score--1');
const current0_El = document.getElementById('current--0');
const current1_El = document.getElementById('current--1');

const dice_El = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Set the current score's to 0
  score0_El.textContent = 0;
  score1_El.textContent = 0;
  // Set the Player's score's to 0
  current0_El.textContent = 0;
  current1_El.textContent = 0;

  // TODO) Remove player winner
  player0_El.classList.remove('player--winner');
  player1_El.classList.remove('player--winner');
  // Set Player 1 to roll first
  player0_El.classList.add('player--active');
  player1_El.classList.remove('player--active');
  // Hide the dice
  dice_El.classList.add('hidden');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Writing this on both, makes sure only 1 is active!
  player0_El.classList.toggle('player--active');
  player1_El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice-roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice.
    dice_El.classList.remove('hidden');
    dice_El.src = `dice-${dice}.png`;
    // 3. Check for a rolled 1: if true
    if (dice !== 1) {
      // Add dice roll to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to acitve player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore; // Same the line of code above
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish The Game
      playing = false;
      dice_El.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
