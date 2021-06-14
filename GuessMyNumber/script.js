'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/*
// The Reset Button!
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //Background
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Insert Number!';

    //When player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high Number!';
      score--;
      document.querySelector('.score').textContent = score;
      score;
    } else {
      document.querySelector('.message').textContent = '🙏 RIP YOU LOSE';
      document.querySelector('.message').style.color = '#b34747';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low Number!';
      score--;
      document.querySelector('.score').textContent = score;
      score;
    } else {
      document.querySelector('.message').textContent = '🙏 RIP YOU LOSE';
      document.querySelector('.message').style.color = '#b34747';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

/* ---------------------------- Refactoring the Code ------------------------- */
/* -------------------------- Removing duplicated code ----------------------- */

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// The Reset Button!
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //Background
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ Insert Number!');

    //When player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is Wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Too high Number!' : '📉 Too low Number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
      score;
    } else {
      // document.querySelector('.message').textContent = '🙏 YOU LOSE';
      displayMessage('🙏 RIP YOU LOSE');
      document.querySelector('.message').style.color = '#b34747';
      document.querySelector('.score').textContent = 0;
    }
  }
});
