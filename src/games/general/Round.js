export default class Round {
  constructor(answerChecker, clientQuestion) {
    this.answerChecker = answerChecker;
    this.clientQuestion = clientQuestion;
  }

  getAnswerChecker = () => this.answerChecker;

  getQuestionForClient = () => this.clientQuestion.getQuestionToClient();
}
