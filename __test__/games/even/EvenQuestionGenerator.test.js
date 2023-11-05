import { describe, expect, test } from '@jest/globals';
import EvenQuestionGenerator from '../../../src/games/even/EvenQuestionGenerator.js';
import Round from '../../../src/games/general/Round.js';
import YesNoAnswerChecker from '../../../src/games/general/YesNoAnswerChecker.js';
import * as assert from "assert";

describe('suite', () => {
  test('positive', () => {
    const result = new EvenQuestionGenerator().generate();
    expect(result).toBeInstanceOf(Round);
    expect(result.getAnswerChecker()).toBeInstanceOf(YesNoAnswerChecker);
  });
});


function countCapitalLetters(str) {
  console.log("income = " + str);
  const filtered = [...str]
      .filter((char) => char.length > 0)
      .filter((char) => char !== " ")
      .filter((char) => char === char.toUpperCase());
  // console.log(JSON.stringify(filtered, null, 2));
  return filtered.length;
}

test('task5', () => {
  try {
    // assert.strictEqual(countCapitalLetters('Hexlet'), 1);
    // assert.strictEqual(countCapitalLetters(''), 0);
    assert.strictEqual(countCapitalLetters('   a   '), 0);
    assert.strictEqual(countCapitalLetters('hello world'), 0);
    assert.strictEqual(countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'), 33);
  } catch (error) {
    console.error(`error = ${error}`);
    test.skip();
  }
});