import {AnswerChecker} from "./AnswerChecker.js";

export class YesNoAnswerChecker extends AnswerChecker {
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
