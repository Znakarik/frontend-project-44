import { describe, expect, test } from '@jest/globals';
import { NumbersAnswerChecker } from '../../../src/games/general/NumbersAnswerChecker.js';

describe('suite', () => {
  test('positive', () => {
    const underTest = new NumbersAnswerChecker('right');
    expect(underTest.isRightAnswer('right')).toBe(true);
  });

  test('negative', () => {
    const underTest = new NumbersAnswerChecker('right');
    expect(underTest.isRightAnswer('wrong')).toBe(false);
  });
});
