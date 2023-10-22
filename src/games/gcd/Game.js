import gameCore from "../GameEngine.js";
import {RuleAware} from "../general/RuleAware.js";
import {GcdQuestionGenerator} from "./GcdQuestionGenerator.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";

const game = () => {
    gameCore(
        new GcdQuestionGenerator(),
        new RuleAware("Find the greatest common divisor of given numbers."),
        new PostAnswerAware()
    );
}

export default game;