export class Round {
  constructor(answerChecker, clientQuestion) {
    this._answerChecker = answerChecker;
    this._clientQuestion = clientQuestion;
  }

  getAnswerChecker = () => this._answerChecker;

  getQuestionForClient = () => this._clientQuestion.getQuestionToClient();
}
