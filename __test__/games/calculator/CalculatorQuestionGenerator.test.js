import { expect, test } from '@jest/globals';
import CalculatorQuestionGenerator from '../../../src/games/calculator/CalculatorQuestionGenerator.js';
import Round from '../../../src/games/general/Round.js';

test('create no null round object', () => {
  const result = new CalculatorQuestionGenerator().generate();
  expect(result).toBeInstanceOf(Round);
  expect(typeof result.getQuestionForClient()).toBe('string');
  expect(result.getAnswerChecker()).toBeTruthy();
});
