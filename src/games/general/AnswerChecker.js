export default class AnswerChecker {
  constructor(rightAnswer) {
    this.rightAnswer = rightAnswer;
  }

  isRightAnswer(clientAnswer) {
    return this.rightAnswer === clientAnswer;
  }

  get getRightAnswer() {
    return this.rightAnswer;
  }
}
