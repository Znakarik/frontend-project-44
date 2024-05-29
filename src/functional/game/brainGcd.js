import initGame from '../src/functional/general/game.js';
import { generateRandomNonZero } from '../src/functional/general/math.js';

const MAX_TRY = 3;

function findGCD(left, right) {
    let upper = left;
    let divider = right;
    while (divider) {
        const tmp = divider;
        divider = upper % divider;
        upper = tmp;
    }
    return upper;
}

function createRightAnswers() {
    const rightAnswers = new Map();
    let i = 0;
    while (i < MAX_TRY) {
        const left = generateRandomNonZero(50);
        const right = generateRandomNonZero(50);
        const gcd = findGCD(left, right);

        rightAnswers.set(`${left} ${right}`, gcd);
        i += 1;
    }
    return rightAnswers;
}

export default function startGame () {
    initGame(
        createRightAnswers(),
        'Find the greatest common divisor of given numbers.',
    );
}