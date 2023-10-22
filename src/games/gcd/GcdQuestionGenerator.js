import {QuestionGenerator} from "../general/QuestionGenerator.js";
import {Round} from "../general/Round.js";
import {ClientQuestion} from "../general/ClientQuestion.js";
import {GcdFinder} from "./GcdFinder.js";
import {GcdAnswerChecker} from "./GcdAnswerChecker.js";

export class GcdQuestionGenerator extends QuestionGenerator {
    generate = () => {
        let left = generateNonZero();
        let right = generateNonZero();

        const gcd = new GcdFinder(left, right).find();

        return new Round(
            new GcdAnswerChecker(gcd),
            new ClientQuestion(`${left} ${right}`)
        )
    }
}
const generateNonZero = () => {
    let result = 0;
    while (result === 0) {
        result = Math.round(Math.random() * 50)
    }

    return result;
}