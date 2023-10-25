import { describe, expect, test } from '@jest/globals';
import YesNoAnswerChecker from '../../../src/games/general/YesNoAnswerChecker.js';

describe('suite', () => {
  test('positive test', () => {
    const underTest = new YesNoAnswerChecker('yes');
    expect(underTest.isRightAnswer('yes')).toBe(true);
  });

  test('negative test', () => {
    const underTest = new YesNoAnswerChecker('yes');
    expect(underTest.isRightAnswer('false')).toBe(false);
  });

  test('negative test, input another word', () => {
    const underTest = new YesNoAnswerChecker('yes');
    expect(underTest.isRightAnswer('refsfesf')).toBe(false);
  });
});
