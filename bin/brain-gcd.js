#!/usr/bin/env node

import { initGame } from '../src/functional/general/game.js';
import { generateRandomNonZero } from '../src/functional/general/math.js';

const MAX_TRY = 3;

function createRightAnswers() {
  const rightAnswers = new Map();

  for (let i = 0; i < MAX_TRY; i++) {
    const left = generateRandomNonZero(50);
    const right = generateRandomNonZero(50);
    const gcd = findGCD(left, right);

    rightAnswers.set(`${left} ${right}`, gcd);
  }
  return rightAnswers;
}

function findGCD(left, right) {
  while (right) {
    const tmp = right;
    right = left % right;
    left = tmp;
  }
  return left;
}

initGame(createRightAnswers(), 'Find the greatest common divisor of given numbers.');
