export class ClientQuestion {
  constructor(questionToClient) {
    this._questionToClient = questionToClient;
  }

  getQuestionToClient = () => this._questionToClient;
}
