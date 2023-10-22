import { AnswerChecker } from "../general/AnswerChecker.js";

export class CalculatorAnswerChecker extends AnswerChecker {
  constructor(rightAnswer) {
    super(Number.parseInt(rightAnswer));
  }

  isRightAnswer(clientAnswer) {
    return super.isRightAnswer(Number.parseInt(clientAnswer));
  }
}
