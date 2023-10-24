import {describe, expect, test} from "@jest/globals";
import {TestMock} from "./TestMock.js";
import {CustomReadlineSync} from "../../../src/games/CustomReadlineSync.js";


describe("suite", () => {

    test("test mocking", () => {
        const consoleLogger = new CustomReadlineSync();
        const executeSpy = jest.spyOn(consoleLogger, "execute").mockImplementation(() => {
            console.log("Mocked ConsoleLogger.execute");
        });

        const testMock = new TestMock(consoleLogger);
        testMock.execute();

        expect(executeSpy).toHaveBeenCalled();

    })
})

