
import initGame from '../general/game.js';
import { generateRandomInt } from '../general/math.js';

const MAX_TRY = 3;

const Operation = {
    multiply: 0,
    sum: 1,
    minus: 2,
};

function generateOperation() {
    const randomNumber = Math.round(Math.random() * 2);
    switch (randomNumber) {
        case 0:
            return Operation.multiply;
        case 1:
            return Operation.sum;
        case 2:
            return Operation.minus;
        default:
            throw new Error('unknown operation');
    }
}

function createQuestionsAndRightAnswers() {
    const rightAnswers = new Map();

    let i = 0;
    while (i < MAX_TRY) {
        const left = generateRandomInt(10);
        const right = generateRandomInt(10);
        const operation = generateOperation();

        let rightAnswer;
        let stringQuestion;
        switch (operation) {
            case Operation.sum:
                rightAnswer = left + right;
                stringQuestion = `${left} + ${right}`;
                break;
            case Operation.minus:
                rightAnswer = left - right;
                stringQuestion = `${left} - ${right}`;
                break;
            case Operation.multiply:
                rightAnswer = left * right;
                stringQuestion = `${left} * ${right}`;
                break;
            default:
                throw new Error(`unknown operation = ${operation}`);
        }

        rightAnswers.set(stringQuestion, rightAnswer);
        i += 1;
    }
    return rightAnswers;
}

function startGame() {
    initGame(createQuestionsAndRightAnswers(), 'What is the result of the expression?');
}

export {startGame};
