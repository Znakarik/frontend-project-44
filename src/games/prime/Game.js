import {GameEngine} from "../GameEngine.js";
import {CustomReadlineSync} from "../CustomReadlineSync.js";
import {PrimeQuestionGenerator} from "./PrimeQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";
import {PostAnswerAware} from "../general/PostAnswerAware.js";

const game = () => {
    new GameEngine(new CustomReadlineSync()).execute(
        new PrimeQuestionGenerator(),
        new RuleAware("Answer \"yes\" if given number is prime. Otherwise answer \"no\"."),
        new PostAnswerAware(false, true)
    );
}

export default game;