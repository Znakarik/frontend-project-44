import AnswerChecker from './AnswerChecker.js';

export default class NumbersAnswerChecker extends AnswerChecker {
  constructor(rightAnswer) {
    super(Number.parseInt(rightAnswer, 10));
  }

  isRightAnswer(clientAnswer) {
    return super.isRightAnswer(Number.parseInt(clientAnswer, 10));
  }
}
