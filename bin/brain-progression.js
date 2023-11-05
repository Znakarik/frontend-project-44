#!/usr/bin/env node

import initGame from '../src/functional/general/game.js';
import { generateRandomInt } from '../src/functional/general/math.js';

const MAX_TRY = 3;
const MAX_PROGRESSION_SIZE = 10;

function createRightAnswers() {
  const rightAnswers = new Map();

  for (let i = 0; i < MAX_TRY; i + 1) {
    const step = generateRandomInt(10);
    const initialNumber = generateRandomInt(10);
    const missingIndexInProgression = generateRandomInt(MAX_PROGRESSION_SIZE);

    const progression = [];

    progression.push(initialNumber);
    for (let j = 1; i < MAX_PROGRESSION_SIZE; j + 1) {
      progression.push(progression[j - 1] + step);
    }
    const rightNumber = progression.at(missingIndexInProgression);
    const questionToClient = progressionToString(progression, missingIndexInProgression);
    rightAnswers.set(questionToClient, rightNumber);
  }
  return rightAnswers;
}

function progressionToString(progression, missingIndex) {
  const copy = [...progression];
  copy[missingIndex] = '..';
  return copy.join(' ');
}

initGame(createRightAnswers(), 'What number is missing in the progression?');
