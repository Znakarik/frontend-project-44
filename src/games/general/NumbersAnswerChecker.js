import {AnswerChecker} from "./AnswerChecker.js";

export class NumbersAnswerChecker extends AnswerChecker {
    constructor(rightAnswer) {
        super(Number.parseInt(rightAnswer));
    }

    isRightAnswer(clientAnswer) {
        return super.isRightAnswer(Number.parseInt(clientAnswer));
    }

}