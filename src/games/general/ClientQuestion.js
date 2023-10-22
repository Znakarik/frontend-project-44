export class ClientQuestion {
  constructor(questionToClient) {
    this._questionToClient = questionToClient;
  }

  getQuestionToClient = () => {
    return this._questionToClient;
  };
}
