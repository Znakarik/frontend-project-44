import {EvenAnswerChecker} from '../../../src/games/even/EvenAnswerChecker.js'
import {describe, expect, test} from "@jest/globals";

describe("suite", () => {
    test("positive test", () => {
        let underTest = new EvenAnswerChecker("yes");
        expect(underTest.isRightAnswer("yes")).toBe(true);
    });

    test("negative test", () => {
        let underTest = new EvenAnswerChecker("yes");
        expect(underTest.isRightAnswer("false")).toBe(false);
    });

    test("negative test, input another word", () => {
        let underTest = new EvenAnswerChecker("yes");
        expect(underTest.isRightAnswer("refsfesf")).toBe(false);
    });
});