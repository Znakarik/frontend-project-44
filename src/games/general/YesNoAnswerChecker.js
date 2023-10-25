import AnswerChecker from './AnswerChecker.js';

export default class YesNoAnswerChecker extends AnswerChecker {
  isRightAnswer(clientAnswer) {
    return isRightAnswer(clientAnswer, this.getRightAnswer());
  }
}

const isRightAnswer = (answer, rightAnswer) => {
  const currentAnswer = answer === 'yes' ? 'yes' : 'no';
  return currentAnswer === rightAnswer;
};
