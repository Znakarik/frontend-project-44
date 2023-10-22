import {AnswerChecker} from "../general/AnswerChecker.js";

export class EvenAnswerChecker extends AnswerChecker {
    constructor(rightAnswer) {
        super(rightAnswer);
    }

    isRightAnswer(clientAnswer) {
        return isRightAnswer(clientAnswer, this.rightAnswer);
    }
}


const isRightAnswer = (answer, rightAnswer) => {
    const currentAnswer = answer === "yes" ? "yes" : "no";
    return currentAnswer === rightAnswer;
};
