#!/usr/bin/env node

import initGame from '../src/functional/general/game.js';
import { generateRandomNonZero } from '../src/functional/general/math.js';

const MAX_TRY = 3;

function createRightAnswers() {
  const rightAnswers = new Map();

  for (let i = 0; i < MAX_TRY; i + 1) {
    const left = generateRandomNonZero(50);
    const right = generateRandomNonZero(50);
    const gcd = findGCD(left, right);

    rightAnswers.set(`${left} ${right}`, gcd);
  }
  return rightAnswers;
}

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

initGame(createRightAnswers(), 'Find the greatest common divisor of given numbers.');
