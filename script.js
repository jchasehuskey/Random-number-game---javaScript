'use strict';

//check on editors section for add ins

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 37;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); //gets value of input
////////////////////////////////////////////////////////////////////////////////////////
//adding click event to application

// //same as below but just assigned ('.check') to checkINput

// let checkInput = document.querySelector('.check');

// checkInput.addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//trunc (above^^) removes decimals.  Added 1 to include 20, as naturally the program would stop at 19
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed the number!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You somehow managed to lose the game :/';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You somehow managed to lose the game :/';
    }
  }
});
