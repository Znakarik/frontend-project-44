import {GameEngine} from "../GameEngine.js";
import {CalculatorQuestionGenerator} from "./CalculatorQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";
import {CustomReadlineSync} from "../CustomReadlineSync.js";

const game = () => {
    new GameEngine(new CustomReadlineSync()).execute(
        new CalculatorQuestionGenerator(),
        new RuleAware("What is the result of the expression?"),
        new PostAnswerAware(false, true)
    );
};

export default game;
