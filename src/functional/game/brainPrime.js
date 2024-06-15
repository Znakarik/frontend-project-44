import initGame from '../general/game.js';
import { getRandomNumber } from '../general/primeNumbersAware.js';

const attemptsAmount = 3;

function createRightAnswers() {
  const rightAnswers = new Map();
  let i = 0;

  while (i < attemptsAmount) {
    const rightAnswer = getRandomNumber();
    rightAnswers.set(rightAnswer, 'yes');
    i += 1;
  }
  return rightAnswers;
}

export default function startGame() {
  initGame(
    createRightAnswers(),
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
}
