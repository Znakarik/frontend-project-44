const MAX_WIN_AMOUNT = 3;

export class GameEngine {
    constructor(readLineSync = null) {
        this.readLineSync = readLineSync;
    }

    execute = (questionGenerator, ruleAware, postAnswerAware) => {
        const name = this.#greetingAndGetName();
        let currentWinAmount = 0;
        this.#log(ruleAware.getRules());
        while (currentWinAmount < MAX_WIN_AMOUNT) {
            let round = questionGenerator.generate();
            let answerChecker = round.getAnswerChecker();
            this.#log(`Question: ${round.getQuestionForClient()}`);
            const decision = this.#getClientDecision();
            if (answerChecker.isRightAnswer(decision)) {
                currentWinAmount++;
                this.#log("Correct!");
                if (this.#isLastTry(currentWinAmount) && postAnswerAware.shouldUsePositive()) {
                    this.#log(postAnswerAware.getPositive(name));
                }
            } else {
                if (postAnswerAware.shouldUseNegative()) {
                    this.#log(postAnswerAware.getNegative(answerChecker.rightAnswer, decision))
                }
                this.#log(`Let's try again, ${name}!`);
                break;
            }
        }
    };

    #isLastTry = (currentTry) => {
        return currentTry === MAX_WIN_AMOUNT;
    }

    #greetingAndGetName = () => {
        this.#log("Welcome to the Brain Games!");
        const name = this.#getName();
        this.#log(`Hello, ${name}`);
        return name;
    };

    #log = (str) => {
        if (this.readLineSync != null) {
            this.readLineSync.send(str);
        } else {
            console.log(str);
        }
    }

    #getClientDecision = () => this.readLineSync.receive("Your answer: ");
    #getName = () => this.readLineSync.receive("May I have your name? ");
}
