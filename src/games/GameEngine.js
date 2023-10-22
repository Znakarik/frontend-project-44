import readlineSync from "readline-sync";

const MAX_WIN_AMOUNT = 3;

const gameCore = (questionGenerator, ruleGenerator) => {
  const name = greetingAndGetName();
  let currentWinAmount = 0;
  console.log(ruleGenerator.getRules());
  while (currentWinAmount < MAX_WIN_AMOUNT) {
    let round = questionGenerator.generate();
    let answerChecker = round.getAnswerChecker();
    console.log(`Question: ${round.getClientQuestion()}`);
    const decision = getClientDecision();
    if (answerChecker.isRightAnswer(decision)) {
      currentWinAmount++;
      console.log("Correct!");
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

const greetingAndGetName = () => {
  console.log("Welcome to the Brain Games!");
  const name = getName();
  console.log(`Hello, ${name}`);
  return name;
};

const getClientDecision = () => readlineSync.question("Your answer: ");

const getName = () => readlineSync.question("May I have your name?");

export default gameCore;
