import initGame from '../general/game.js';
import { generateRandomInt } from '../general/math.js';

const attemptsAmount = 3;

function createRightAnswers() {
  const rightAnswers = new Map();
  let i = 0;
  while (i < attemptsAmount) {
    const number = generateRandomInt(100);
    rightAnswers.set(number, number % 2 === 0 ? 'yes' : 'no');
    i += 1;
  }
  return rightAnswers;
}

const rightAnswers = createRightAnswers();

export default function startGame() {
  initGame(
    rightAnswers,
    'Answer "yes" if the number is even, otherwise answer "no".',
  );
}
