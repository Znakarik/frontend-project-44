import {GameEngine} from "../GameEngine.js";
import {RuleAware} from "../general/RuleAware.js";
import {GcdQuestionGenerator} from "./GcdQuestionGenerator.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";
import {CustomReadlineSync} from "../CustomReadlineSync.js";

const game = () => {
    new GameEngine(new CustomReadlineSync()).execute(
        new GcdQuestionGenerator(),
        new RuleAware("Find the greatest common divisor of given numbers."),
        new PostAnswerAware()
    );
}

export default game;