import QuestionGenerator from '../general/QuestionGenerator.js';
import Round from '../general/Round.js';
import ClientQuestion from '../general/ClientQuestion.js';
import { getRandomNumber } from './PrimeNumbersAware.js';
import YesNoAnswerChecker from '../general/YesNoAnswerChecker.js';

export default class PrimeQuestionGenerator extends QuestionGenerator {
  generate = () => {
    const rightAnswer = getRandomNumber();
    return new Round(
      new YesNoAnswerChecker('yes'),
      new ClientQuestion(rightAnswer),
    );
  };
}
