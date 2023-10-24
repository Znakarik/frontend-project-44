import {GameEngine} from "../GameEngine.js";
import {EvenQuestionGenerator} from "./EvenQuestionGenerator.js";
import {RuleAware} from "../general/RuleAware.js";
import {CustomReadlineSync} from "../CustomReadlineSync.js";

const game = () => {
    new GameEngine(new CustomReadlineSync()).execute(
        new EvenQuestionGenerator(),
        new RuleAware('Answer "yes" if the number is even, otherwise answer "no".')
    )
};
export default game;
