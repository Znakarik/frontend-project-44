#!/usr/bin/env node

import {initGame} from "../src/functional/general/game.js";
import {generateRandomNonZero} from "../src/functional/general/math.js";
import {getRandomNumber} from "../src/functional/general/primeNumbersAware.js";

const MAX_TRY = 3;

function createRightAnswers() {
    let rightAnswers = new Map();

    for (let i = 0; i < MAX_TRY; i++) {
        let rightAnswer = getRandomNumber();
        rightAnswers.set(rightAnswer, 'yes');
    }
    return rightAnswers;
}

initGame(createRightAnswers(), 'Answer "yes" if given number is prime. Otherwise answer "no".');