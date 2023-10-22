import gameCore from "../GameEngine.js";
import { CalculatorQuestionGenerator } from "./CalculatorQuestionGenerator.js";
import { RuleAware } from "../general/RuleAware.js";

const game = () => {
  gameCore(
    new CalculatorQuestionGenerator(),
    new RuleAware("What is the result of the expression?"),
  );
};

export default game;
