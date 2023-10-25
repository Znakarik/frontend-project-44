import {
  describe, expect, jest, test,
} from '@jest/globals';
import GameEngine from '../../src/games/GameEngine.js';
import CustomReadlineSync from '../../src/games/CustomReadlineSync.js';
import QuestionGenerator from '../../src/games/general/QuestionGenerator.js';
import RuleAware from '../../src/games/general/RuleAware.js';
import PostAnswerAware from '../../src/games/general/PostAnswerAware.js';
import Round from '../../src/games/general/Round.js';
import AnswerChecker from '../../src/games/general/AnswerChecker.js';
import ClientQuestion from '../../src/games/general/ClientQuestion.js';

function createCustomReadlineSyncReceiveSpy(readlineSync, returnVal) {
  return jest.spyOn(readlineSync, 'receive');
}

function createCustomReadlineSyncSendSpy(readLineSync) {
  return jest.spyOn(readLineSync, 'send').mockReturnValue('');
}

function createAnswerCheckerSpy(right, answerChecker) {
  return jest.spyOn(answerChecker, 'isRightAnswer');
}

function createQuestionGeneratorSpy(questionGenerator, answerChecker) {
  return jest.spyOn(questionGenerator, 'generate')
      .mockImplementation(() => new Round(
          answerChecker,
          new ClientQuestion('questionToClient'),
      ));
}

describe('suite', () => {
  const answer = 'rightAnswer';

  const readlineSync = new CustomReadlineSync();
  const questionGenerator = new QuestionGenerator();
  const answerChecker = new AnswerChecker(answer);

  test('write answers', () => {
    createCustomReadlineSyncReceiveSpy(readlineSync, 'Olya')
      .mockReturnValueOnce('Olya')
      .mockReturnValueOnce(answer)
      .mockReturnValueOnce(answer)
      .mockReturnValueOnce(answer);

    const spyCustomReadlineSyncSend = createCustomReadlineSyncSendSpy(readlineSync);

    const answerCheckerSpy = createAnswerCheckerSpy(true, answerChecker)
      .mockReturnValue(true);

    createQuestionGeneratorSpy(questionGenerator, answerChecker);

    const underTest = new GameEngine(readlineSync);

    // when
    underTest.execute(
      questionGenerator,
      new RuleAware(),
      new PostAnswerAware(false, false),
    );

    // then
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Welcome to the Brain Games!');
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Hello, Olya');
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Correct!');
    expect(answerCheckerSpy).toBeCalled();
  });

  test('wrong answers', () => {
    createCustomReadlineSyncReceiveSpy(readlineSync, 'Olya')
      .mockReturnValueOnce('Olya')
      .mockReturnValueOnce(answer);

    const spyCustomReadlineSyncSend = createCustomReadlineSyncSendSpy(readlineSync);

    const answerCheckerSpy = createAnswerCheckerSpy(true, answerChecker)
      .mockReturnValue(false);

    createQuestionGeneratorSpy(questionGenerator, answerChecker);

    const underTest = new GameEngine(readlineSync);

    // when
    underTest.execute(
      questionGenerator,
      new RuleAware(),
      new PostAnswerAware(false, false),
    );

    // then
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Welcome to the Brain Games!');
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Hello, Olya');
    expect(spyCustomReadlineSyncSend).toBeCalledWith('Let\'s try again, Olya!');

    expect(answerCheckerSpy).toBeCalled();
  });
});
