import {GameEngine} from "../GameEngine.js";
import {CalculatorQuestionGenerator} from "./CalculatorQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";

const game = () => {
    new GameEngine().execute(
        new CalculatorQuestionGenerator(),
        new RuleAware("What is the result of the expression?"),
        new PostAnswerAware()
    );
};

export default game;
