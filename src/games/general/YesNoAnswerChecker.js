import AnswerChecker from './AnswerChecker.js';

export default class YesNoAnswerChecker extends AnswerChecker {

  isRightAnswer(clientAnswer) {
    const currentAnswer = clientAnswer === 'yes' ? 'yes' : 'no';
    return currentAnswer === this.rightAnswer;
  }
}
