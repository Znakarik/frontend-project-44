#!/usr/bin/env node

import initGame from '../src/functional/general/game.js';
import { generateRandomInt } from '../src/functional/general/math.js';

const MAX_TRY = 3;

function createRightAnswers() {
  const rightAnswers = new Map();
  let i = 0;
  while (i < MAX_TRY) {
    const number = generateRandomInt(100);
    rightAnswers.set(number, number % 2 === 0 ? 'yes' : 'no');
    i += 1;
  }
  return rightAnswers;
}

const rightAnswers = createRightAnswers();
initGame(rightAnswers, 'Answer "yes" if the number is even, otherwise answer "no".');
