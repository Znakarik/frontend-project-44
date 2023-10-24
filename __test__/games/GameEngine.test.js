import {GameEngine} from '../../src/games/GameEngine.js'
import {describe, expect, jest, test} from "@jest/globals";
import {CustomReadlineSync} from "../../src/games/CustomReadlineSync.js";
import {QuestionGenerator} from "../../src/games/general/QuestionGenerator.js";
import {RuleAware} from "../../src/games/general/RuleAware.js";
import {PostAnswerAware} from "../../src/games/general/PostAnswerAware.js";
import {Round} from "../../src/games/general/Round.js";
import {AnswerChecker} from "../../src/games/general/AnswerChecker.js";
import {ClientQuestion} from "../../src/games/general/ClientQuestion.js";
import readlineSync from "readline-sync";

describe("suite", () => {
    test("create", () => {
        const answer = "rightAnswer";
        const readlineSync = new CustomReadlineSync();

        const spyCustomReadlineSyncReceive = createCustomReadlineSyncReceiveSpy(readlineSync, "Olya")
            .mockReturnValueOnce("Olya")
            .mockReturnValueOnce(answer)
            .mockReturnValueOnce(answer)
            .mockReturnValueOnce(answer);

        const spyCustomReadlineSyncSend = createCustomReadlineSyncSendSpy(readlineSync);

        const answerChecker = new AnswerChecker(answer);
        const answerCheckerSpy = createAnswerCheckerSpy(true, answerChecker)
            .mockReturnValue(true);

        const questionGenerator = new QuestionGenerator();
        const questionGeneratorSpy = createQuestionGeneratorSpy(questionGenerator, answerChecker);

        let underTest = new GameEngine(readlineSync);

        // when
        underTest.execute(
            questionGenerator,
            new RuleAware(),
            new PostAnswerAware()
        );

        // then
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Welcome to the Brain Games!");
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Hello, Olya");
        expect(spyCustomReadlineSyncSend).toBeCalledWith("Correct!");
    });
});
const createCustomReadlineSyncReceiveSpy = (readlineSync, returnVal) => {
    return jest.spyOn(readlineSync, "receive");
}

const createCustomReadlineSyncSendSpy = (readLineSync) => {
    return jest.spyOn(readLineSync, "send").mockReturnValue("");
}

const createAnswerCheckerSpy = (right, answerChecker) => {
    return jest.spyOn(answerChecker, "isRightAnswer");
}

const createQuestionGeneratorSpy = (questionGenerator, answerChecker) => {
    return jest.spyOn(questionGenerator, "generate")
        .mockImplementation(() => {
            return new Round(
                answerChecker,
                new ClientQuestion("questionToClient")
            )
        });
}