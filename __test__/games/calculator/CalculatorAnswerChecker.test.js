import { NumbersAnswerChecker } from "../../../src/games/general/NumbersAnswerChecker.js";
import { describe, expect, test } from "@jest/globals";

describe("suite", () => {
  test("positive test", () => {
    let underTest = new NumbersAnswerChecker("10");
    expect(underTest.isRightAnswer("10")).toBe(true);
  });

  test("negative test, not right answer", () => {
    let underTest = new NumbersAnswerChecker("10");
    expect(underTest.isRightAnswer("1")).toBe(false);
  });

  test("negative test, nan", () => {
    let underTest = new NumbersAnswerChecker("10");
    expect(underTest.isRightAnswer(NaN)).toBe(false);
  });

  test("negative test, empty string", () => {
    let underTest = new NumbersAnswerChecker("10");
    expect(underTest.isRightAnswer("")).toBe(false);
  });

  test("negative test,  not a number", () => {
    let underTest = new NumbersAnswerChecker("10");
    expect(underTest.isRightAnswer("aaaa")).toBe(false);
  });
});
