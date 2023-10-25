export default class ClientQuestion {
  constructor(questionToClient) {
    this.questionToClient = questionToClient;
  }

  getQuestionToClient() {
    return this.questionToClient;
  }
}
