import {PostAnswerAware} from "../general/PostAnswerAware.js";

export class CalculatorPostAnswerAware extends PostAnswerAware {

    constructor(negativeAnswer) {
        super(negativeAnswer);
    }

    getNegative = (rightAnswer, wrongAnswer) => {
        return `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
    }
}
