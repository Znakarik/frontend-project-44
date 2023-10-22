import readlineSync from "readline-sync";

const MAX_WIN_AMOUNT = 3;

const game = () => {
  console.log("Welcome to the Brain Games!");
  const name = getName();
  console.log(`Hello, ${name}`);

  let currentWinAmount = 0;
  while (currentWinAmount < MAX_WIN_AMOUNT) {
    const number = Math.round(Math.random() * 100);
    const rightAnswer = isEven(number) ? "yes" : "no";
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);
    const decision = getClientDecision();
    if (isRightAnswer(decision, rightAnswer)) {
      currentWinAmount++;
      console.log("Correct!");
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

const getClientDecision = () => readlineSync.question("Your answer: ");

const getName = () => readlineSync.question("May I have your name?");

const isRightAnswer = (answer, rightAnswer) => {
  const currentAnswer = answer === "yes" ? "yes" : "no";
  return currentAnswer === rightAnswer;
};

const isEven = (number) => number % 2 === 0;

export default game;
