import { QuestionGenerator } from "../general/QuestionGenerator.js";
import { Round } from "../general/Round.js";
import { CalculatorAnswerChecker } from "./CalculatorAnswerChecker.js";
import { ClientQuestion } from "../general/ClientQuestion.js";

export class CalculatorQuestionGenerator extends QuestionGenerator {
  generate = () => {
    const left = Math.round(Math.random() * 10);
    const right = Math.round(Math.random() * 10);
    const operation = this.generateOperation();

    let rightAnswer;
    let stringQuestion;
    switch (operation) {
      case Operation.sum:
        rightAnswer = left + right;
        stringQuestion = `${left} + ${right}`;
        break;
      case Operation.minus:
        rightAnswer = left - right;
        stringQuestion = `${left} - ${right}`;
        break;
      case Operation.multiply:
        rightAnswer = left * right;
        stringQuestion = `${left} * ${right}`;
        break;
    }

    return new Round(
      new CalculatorAnswerChecker(rightAnswer),
      new ClientQuestion(stringQuestion),
    );
  };

  generateOperation = () => {
    let randomNumber = Math.round(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        return Operation.multiply;
      case 2:
        return Operation.sum;
      case 3:
        return Operation.minus;
    }
  };
}

const Operation = {
  multiply: 1,
  sum: 2,
  minus: 3,
};
