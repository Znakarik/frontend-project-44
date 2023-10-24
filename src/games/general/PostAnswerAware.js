export class PostAnswerAware {
    constructor(positive, negative) {
        this._positive = positive;
        this._negative = negative;
    }

    getPositive = (name) => {
        if (this._positive) {
            return `Congratulations, ${name}!`
        }
    }

    getNegative = (rightAnswer, wrongAnswer) => {
        if (this._negative) {
            return `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
        }
    }

    shouldUsePositive() {
        return this._positive;
    }

    shouldUseNegative() {
        return this._negative;
    }
}
