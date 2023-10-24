import {NumbersAnswerChecker} from "../../../src/games/general/NumbersAnswerChecker.js";
import {describe, expect, test} from "@jest/globals";

describe("suite", () => {
    test("positive", () => {
        let underTest = new NumbersAnswerChecker("right");
        expect(underTest.isRightAnswer("right")).toBe(true);
    });

    test("negative", () => {
        let underTest = new NumbersAnswerChecker("right");
        expect(underTest.isRightAnswer("wrong")).toBe(false);
    });

})