export class TestMock {

    constructor(consoleLogger) {
        this.consoleLogger = consoleLogger;
    }

    execute = () => {
        this.consoleLogger.execute();
    }
}