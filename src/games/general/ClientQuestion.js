export default class ClientQuestion {
  constructor(questionToClient) {
    this.questionToClient = questionToClient;
  }

  getQuestionToClient = () => this.questionToClient;
}
