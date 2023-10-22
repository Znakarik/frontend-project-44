import gameCore from "../GameEngine.js";
import { CalculatorQuestionGenerator } from "./CalculatorQuestionGenerator.js";
import { RuleGenerator } from "../general/GameRulesVisibility.js";

const game = () => {
  gameCore(
    new CalculatorQuestionGenerator(),
    new RuleGenerator("What is the result of the expression?"),
  );
};

export default game;
