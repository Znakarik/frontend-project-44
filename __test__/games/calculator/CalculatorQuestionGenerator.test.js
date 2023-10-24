import { CalculatorQuestionGenerator } from "../../../src/games/calculator/CalculatorQuestionGenerator.js";
import { expect, jest, test } from "@jest/globals";
import { Round } from "../../../src/games/general/Round.js";
import { ClientQuestion } from "../../../src/games/general/ClientQuestion.js";

test("create no null round object", () => {
  let result = new CalculatorQuestionGenerator().generate();
  expect(result).toBeInstanceOf(Round);
  expect(typeof result.getQuestionForClient()).toBe("string");
  expect(result.getAnswerChecker()).toBeTruthy();
});
