import { describe, expect, test } from '@jest/globals';
import PostAnswerAware from '../../../src/games/general/PostAnswerAware.js';

describe('suite', () => {
  test('positive', () => {
    const underTest = new PostAnswerAware(true, true);
    expect(underTest.getPositive().length > 0).toBe(true);
    expect(underTest.getNegative().length > 0).toBe(true);
  });

  test('negative', () => {
    const underTest = new PostAnswerAware(false, false);
    expect(() => underTest.getPositive()).toThrow(new Error("should not use positive"));
    expect(() => underTest.getNegative()).toThrow(new Error("should not use negative"));
  });

  test('negative2', () => {
    const underTest = new PostAnswerAware(true, false);
    expect(underTest.getPositive().length > 0).toBe(true);
    expect(() => underTest.getNegative()).toThrow(Error)
  });

  test('negative3', () => {
    const underTest = new PostAnswerAware(false, true);
    expect(() => underTest.getPositive()).toThrow(Error)
    expect(underTest.getNegative().length > 0).toBe(true);
  });
});
