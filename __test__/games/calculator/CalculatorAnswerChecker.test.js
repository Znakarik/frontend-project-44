import { CalculatorAnswerChecker } from "../../../src/games/calculator/CalculatorAnswerChecker.js";
import { describe, expect, test } from "@jest/globals";

describe("suite", () => {
  test("positive test", () => {
    let underTest = new CalculatorAnswerChecker("10");
    expect(underTest.isRightAnswer("10")).toBe(true);
  });

  test("negative test, not right answer", () => {
    let underTest = new CalculatorAnswerChecker("10");
    expect(underTest.isRightAnswer("1")).toBe(false);
  });

  test("negative test, nan", () => {
    let underTest = new CalculatorAnswerChecker("10");
    expect(underTest.isRightAnswer(NaN)).toBe(false);
  });

  test("negative test, empty string", () => {
    let underTest = new CalculatorAnswerChecker("10");
    expect(underTest.isRightAnswer("")).toBe(false);
  });

  test("negative test,  not a number", () => {
    let underTest = new CalculatorAnswerChecker("10");
    expect(underTest.isRightAnswer("aaaa")).toBe(false);
  });
});
