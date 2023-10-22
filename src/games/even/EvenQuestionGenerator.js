import {QuestionGenerator} from "../general/QuestionGenerator.js";
import {Round} from "../general/Round.js";
import {ClientQuestion} from "../general/ClientQuestion.js";
import {EvenAnswerChecker} from "./EvenAnswerChecker.js";

export class EvenQuestionGenerator extends QuestionGenerator {

    generate = () => {
        const number = Math.round(Math.random() * 100);
        const rightAnswer = isEven(number) ? "yes" : "no";
        return new Round(
            new EvenAnswerChecker(rightAnswer),
            new ClientQuestion(number)
        );
    }
}

const isEven = (number) => number % 2 === 0;
