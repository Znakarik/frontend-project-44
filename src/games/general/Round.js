export class Round {
  constructor(answerChecker, clientQuestion) {
    this._answerChecker = answerChecker;
    this._clientQuestion = clientQuestion;
  }

  getAnswerChecker = () => {
    return this._answerChecker;
  };

  getClientQuestion = () => {
    return this._clientQuestion.getQuestionToClient();
  };
}
