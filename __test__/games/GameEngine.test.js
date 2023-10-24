import {GameEngine} from '../../src/games/GameEngine.js'
import {describe, expect, jest, test} from "@jest/globals";
import {CustomReadlineSync} from "../../src/games/CustomReadlineSync.js";
import {QuestionGenerator} from "../../src/games/general/QuestionGenerator.js";
import {RuleAware} from "../../src/games/general/RuleAware.js";
import {PostAnswerAware} from "../../src/games/general/PostAnswerAware.js";
import {Round} from "../../src/games/general/Round.js";
import {AnswerChecker} from "../../src/games/general/AnswerChecker.js";
import {ClientQuestion} from "../../src/games/general/ClientQuestion.js";

describe("suite", () => {
    const answer = "rightAnswer";

    const readlineSync = new CustomReadlineSync();
    const questionGenerator = new QuestionGenerator();
    const answerChecker = new AnswerChecker(answer);

    test("write answers", () => {
        const spyCustomReadlineSyncReceive = createCustomReadlineSyncReceiveSpy(readlineSync, "Olya")
            .mockReturnValueOnce("Olya")
            .mockReturnValueOnce(answer)
            .mockReturnValueOnce(answer)
            .mockReturnValueOnce(answer);

        const spyCustomReadlineSyncSend = createCustomReadlineSyncSendSpy(readlineSync);

        const answerCheckerSpy = createAnswerCheckerSpy(true, answerChecker)
            .mockReturnValue(true);

        const questionGeneratorSpy = createQuestionGeneratorSpy(questionGenerator, answerChecker);

        let underTest = new GameEngine(readlineSync);

        // when
        underTest.execute(
            questionGenerator,
            new RuleAware(),
            new PostAnswerAware(false, false)
        );

        // then
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Welcome to the Brain Games!");
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Hello, Olya");
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Correct!");
        expect(answerCheckerSpy).toBeCalled();
    });

    test("wrong answers", () => {
        const spyCustomReadlineSyncReceive = createCustomReadlineSyncReceiveSpy(readlineSync, "Olya")
            .mockReturnValueOnce("Olya")
            .mockReturnValueOnce(answer);

        const spyCustomReadlineSyncSend = createCustomReadlineSyncSendSpy(readlineSync);

        const answerCheckerSpy = createAnswerCheckerSpy(true, answerChecker)
            .mockReturnValue(false);

        const questionGeneratorSpy = createQuestionGeneratorSpy(questionGenerator, answerChecker);

        let underTest = new GameEngine(readlineSync);

        // when
        underTest.execute(
            questionGenerator,
            new RuleAware(),
            new PostAnswerAware(false, false)
        );

        // then
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Welcome to the Brain Games!");
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Hello, Olya");
        expect(spyCustomReadlineSyncSend).toBeCalledWith(`Let's try again, Olya!`);

        expect(answerCheckerSpy).toBeCalled();
    });
});

function createCustomReadlineSyncReceiveSpy (readlineSync, returnVal) {
    return jest.spyOn(readlineSync, "receive");
}

function createCustomReadlineSyncSendSpy (readLineSync) {
    return jest.spyOn(readLineSync, "send").mockReturnValue("");
}

function createAnswerCheckerSpy (right, answerChecker) {
    return jest.spyOn(answerChecker, "isRightAnswer");
}

function createQuestionGeneratorSpy (questionGenerator, answerChecker) {
    return jest.spyOn(questionGenerator, "generate")
        .mockImplementation(() => {
            return new Round(
                answerChecker,
                new ClientQuestion("questionToClient")
            )
        });
}