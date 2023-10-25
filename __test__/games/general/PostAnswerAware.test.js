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
    expect(underTest.getPositive()).toBeFalsy();
    expect(underTest.getNegative()).toBeFalsy();
  });

  test('negative2', () => {
    const underTest = new PostAnswerAware(true, false);
    expect(underTest.getPositive().length > 0).toBe(true);
    expect(underTest.getNegative()).toBeFalsy();
  });

  test('negative3', () => {
    const underTest = new PostAnswerAware(false, true);
    expect(underTest.getPositive()).toBeFalsy();
    expect(underTest.getNegative().length > 0).toBe(true);
  });
});
