#!/usr/bin/env node

import { initGame } from '../src/functional/general/game.js';
import { generateRandomInt } from '../src/functional/general/math.js';

const MAX_TRY = 3;

const rightAnswers = createRightAnswers();
initGame(rightAnswers, 'Answer "yes" if the number is even, otherwise answer "no".');

function createRightAnswers() {
  const rightAnswers = new Map();
  for (let i = 0; i < MAX_TRY; i++) {
    const number = generateRandomInt(100);
    rightAnswers.set(number, number % 2 === 0 ? 'yes' : 'no');
  }
  return rightAnswers;
}
