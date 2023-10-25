import { QuestionGenerator } from '../general/QuestionGenerator.js';
import { Round } from '../general/Round.js';
import { ClientQuestion } from '../general/ClientQuestion.js';
import { NumbersAnswerChecker } from '../general/NumbersAnswerChecker.js';

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
      new NumbersAnswerChecker(rightAnswer),
      new ClientQuestion(stringQuestion),
    );
  };

  generateOperation = () => {
    const randomNumber = Math.round(Math.random() * 2);
    switch (randomNumber) {
      case 0:
        return Operation.multiply;
      case 1:
        return Operation.sum;
      case 2:
        return Operation.minus;
    }
  };
}

const Operation = {
  multiply: 0,
  sum: 1,
  minus: 2,
};
