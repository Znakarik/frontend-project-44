import { describe, expect, test } from '@jest/globals';
import { ProgressionQuestionGenerator } from '../../../src/games/progression/ProgressionQuestionGenerator.js';

describe('test', () => {
  test('', () => {
    const underTest = new ProgressionQuestionGenerator();
    const round = underTest.generate();
    console.log(JSON.stringify(round, null, 2));

    expect(round.getQuestionForClient().length > 0).toBe(true);
  });
});
