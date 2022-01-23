let checkBtn = document.querySelector('.check');
let again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 12) + 1;
let score = 20;
let highScore = 0;

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let updateScore = score => {
  document.querySelector('.score').textContent = score;
};

checkBtn.addEventListener('click', () => {
  let guess = parseInt(document.querySelector('.guess').value, 10);
  document.querySelector('.number').style.width = '200px';

  if (!guess) {
    displayMessage = '📛  No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('😊 Number Correct');
    document.querySelector('body').style.backgroundColor = 'rgb(115, 206, 93)';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔆 Too high' : '🔅 Too low');
      score -= 1;
      updateScore(score);
    } else {
      displayMessage('🔥 You lost the game');
      updateScore(0);
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 12) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('🎉 Let Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  updateScore(score);
  document.querySelector('.guess').textContent = '';
});
