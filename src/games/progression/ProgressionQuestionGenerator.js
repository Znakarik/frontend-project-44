import { QuestionGenerator } from '../general/QuestionGenerator.js';
import { Round } from '../general/Round.js';
import { NumbersAnswerChecker } from '../general/NumbersAnswerChecker.js';
import { ClientQuestion } from '../general/ClientQuestion.js';

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
      new NumbersAnswerChecker(rightNumber),
      new ClientQuestion(questionToClient),
    );
  };

  #progressionToString(progression, missingIndex) {
    const copy = [...progression];
    copy[missingIndex] = '..';
    return copy.join(' ');
  }
}
