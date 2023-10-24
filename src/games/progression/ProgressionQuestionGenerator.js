import {QuestionGenerator} from "../general/QuestionGenerator.js";
import {Round} from "../general/Round.js";
import {AnswerChecker} from "../general/AnswerChecker.js";
import {ProgressionAnswerChecker} from "./ProgressionAnswerChecker.js";
import {ClientQuestion} from "../general/ClientQuestion.js";

const MAX_PROGRESSION_SIZE = 10;

export class ProgressionQuestionGenerator extends QuestionGenerator {
    generate = () => {
        const step = Math.round(Math.random() * 10);
        const initialNumber = Math.round(Math.random() * 10);
        const missingIndexInProgression = Math.round(Math.random() * MAX_PROGRESSION_SIZE);

        const progression = [];

        progression.push(initialNumber);
        for (let i = 1; i < MAX_PROGRESSION_SIZE; i++) {
            progression.push(progression[i - 1] + step);
        }

        const rightNumber = progression.at(missingIndexInProgression);

        const questionToClient = this.#progressionToString(progression, missingIndexInProgression);

        return new Round(
            new ProgressionAnswerChecker(rightNumber),
            new ClientQuestion(questionToClient)
        );
    }

    #progressionToString(progression, missingIndex) {
        let result = "";
        for (let i = 0; i < progression.length - 1; i++) {
            if (i === missingIndex) {
                result += ".."
            } else {
                result += progression.at(i);
            }
            result += " ";
        }
        return result.trim();
    }
}