import {ProgressionQuestionGenerator} from '../../../src/games/progression/ProgressionQuestionGenerator.js'
import {describe, expect, test} from "@jest/globals";

describe("test", () => {
    test("", () => {
        let underTest = new ProgressionQuestionGenerator();
        let round = underTest.generate();
        console.log(JSON.stringify(round, null, 2));

        expect(round.getQuestionForClient().length > 0).toBe(true);
    })
})