import initGame from '../src/functional/general/game.js';
import {generateRandomInt} from '../src/functional/general/math.js';

const MAX_TRY = 3;
const MAX_PROGRESSION_SIZE = 10;

function progressionToString(progression, missingIndex) {
    const copy = [...progression];
    copy[missingIndex] = '..';
    return copy.join(' ');
}

function createRightAnswers() {
    const rightAnswers = new Map();
    let i = 0;
    while (i < MAX_TRY) {
        const step = generateRandomInt(10);
        const initialNumber = generateRandomInt(10);
        const missingIndexInProgression = generateRandomInt(MAX_PROGRESSION_SIZE);

        const progression = [];

        progression.push(initialNumber);
        let j = 1;
        while (j <= MAX_PROGRESSION_SIZE) {
            progression.push(progression[j - 1] + step);
            j += 1;
        }
        const rightNumber = progression.at(missingIndexInProgression);
        const questionToClient = progressionToString(
            progression,
            missingIndexInProgression,
        );
        rightAnswers.set(questionToClient, rightNumber);
        i += 1;
    }
    console.log(JSON.stringify(rightAnswers, null, 2));
    return rightAnswers;
}

export default function startGame() {
    initGame(createRightAnswers(), 'What number is missing in the progression?');
}