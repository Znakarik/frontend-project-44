export class AnswerChecker {
  constructor(rightAnswer) {
    this.rightAnswer = rightAnswer;
  }

  isRightAnswer(clientAnswer) {
    return this.rightAnswer === clientAnswer;
  }
}
