import {PostAnswerAware} from "../general/PostAnswerAware.js";

export class CalculatorPostAnswerAware extends PostAnswerAware {

    getNegative = (rightAnswer, wrongAnswer) => {
        return `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
    }
}
