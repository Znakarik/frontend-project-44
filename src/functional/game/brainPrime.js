import initGame from '../src/functional/general/game.js';
import {getRandomNumber} from '../src/functional/general/primeNumbersAware.js';

const MAX_TRY = 3;

function createRightAnswers() {
    const rightAnswers = new Map();
    let i = 0;

    while (i < MAX_TRY) {
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