import {GameEngine} from "../GameEngine.js";
import {EvenQuestionGenerator} from "./EvenQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";

const game = () => {
    new GameEngine().execute(
        new EvenQuestionGenerator(),
        new RuleAware('Answer "yes" if the number is even, otherwise answer "no".')
    )
};
export default game;
