import {PostAnswerAware} from '../../../src/games/general/PostAnswerAware.js'
import {describe, expect, test} from "@jest/globals";

describe("suite", () => {
    test("positive", () => {
        let underTest = new PostAnswerAware(true, true);
        expect(underTest.getPositive().length > 0).toBe(true);
        expect(underTest.getNegative().length > 0).toBe(true);
    });

    test("negative", () => {
        let underTest = new PostAnswerAware(false, false);
        expect(underTest.getPositive()).toBeFalsy();
        expect(underTest.getNegative()).toBeFalsy()
    });

    test("negative2", () => {
        let underTest = new PostAnswerAware(true, false);
        expect(underTest.getPositive().length > 0).toBe(true);
        expect(underTest.getNegative()).toBeFalsy()
    });

    test("negative3", () => {
        let underTest = new PostAnswerAware(false, true);
        expect(underTest.getPositive()).toBeFalsy();
        expect(underTest.getNegative().length > 0).toBe(true);
    });
});
