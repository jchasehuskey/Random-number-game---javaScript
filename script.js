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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//trunc (above^^) removes decimals.  Added 1 to include 20, as naturally the program would stop at 19

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed the number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#69db7c';
    document.querySelector('.number').style.width = '30rem';
    let number = document.querySelector('.number');
    number.style.color = 'purple';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // number.style.backgroundColor = 'black';

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      //when player loses
    } else {
      document.querySelector('.message').textContent =
        'You somehow managed to lose the game :/';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;

      //when player loses
    } else {
      document.querySelector('.message').textContent =
        'You somehow managed to lose the game :/';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
