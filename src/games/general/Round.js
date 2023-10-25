export default class Round {
    constructor(answerChecker, clientQuestion) {
        this.answerChecker = answerChecker;
        this.clientQuestion = clientQuestion;
    }

    getAnswerChecker() {
        return this.answerChecker;
    }

    getQuestionForClient() {
        return this.clientQuestion.getQuestionToClient()
    };
}
