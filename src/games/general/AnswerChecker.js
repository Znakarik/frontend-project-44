export class AnswerChecker {
  constructor(rightAnswer) {
    this._rightAnswer = rightAnswer;
  }

  isRightAnswer(clientAnswer) {
    return this._rightAnswer === clientAnswer;
  }


  get rightAnswer() {
    return this._rightAnswer;
  }
}
