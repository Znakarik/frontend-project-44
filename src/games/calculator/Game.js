import gameCore from "../GameEngine.js";
import {CalculatorQuestionGenerator} from "./CalculatorQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";
import {CalculatorPostAnswerAware} from "./CalculatorPostAnswerAware.js";

const game = () => {
    gameCore(
        new CalculatorQuestionGenerator(),
        new RuleAware("What is the result of the expression?"),
        new CalculatorPostAnswerAware()
    );
};

export default game;
