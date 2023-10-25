import { describe, expect, test } from '@jest/globals';
import { NumbersAnswerChecker } from '../../../src/games/general/NumbersAnswerChecker.js';

describe('suite', () => {
  test('positive test', () => {
    const underTest = new NumbersAnswerChecker('10');
    expect(underTest.isRightAnswer('10')).toBe(true);
  });

  test('negative test, not right answer', () => {
    const underTest = new NumbersAnswerChecker('10');
    expect(underTest.isRightAnswer('1')).toBe(false);
  });

  test('negative test, nan', () => {
    const underTest = new NumbersAnswerChecker('10');
    expect(underTest.isRightAnswer(NaN)).toBe(false);
  });

  test('negative test, empty string', () => {
    const underTest = new NumbersAnswerChecker('10');
    expect(underTest.isRightAnswer('')).toBe(false);
  });

  test('negative test,  not a number', () => {
    const underTest = new NumbersAnswerChecker('10');
    expect(underTest.isRightAnswer('aaaa')).toBe(false);
  });
});
