import {EvenQuestionGenerator} from '../../../src/games/even/EvenQuestionGenerator.js'
import {describe, expect, test} from "@jest/globals";
import {Round} from "../../../src/games/general/Round.js";
import {YesNoAnswerChecker} from "../../../src/games/general/YesNoAnswerChecker.js";

describe("suite", () => {
    test("positive", () => {
        const result = new EvenQuestionGenerator().generate();
        expect(result).toBeInstanceOf(Round);
        expect(result.getAnswerChecker()).toBeInstanceOf(YesNoAnswerChecker);
    })
})