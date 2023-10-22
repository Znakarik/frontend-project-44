import gameCore from "../GameEngine.js";
import {EvenQuestionGenerator} from "./EvenQuestionGenerator.js";
import {RuleGenerator} from "../general/GameRulesVisibility.js";

const game = () => {
    gameCore(
        new EvenQuestionGenerator(),
        new RuleGenerator('Answer "yes" if the number is even, otherwise answer "no".')
    )
};
export default game;
