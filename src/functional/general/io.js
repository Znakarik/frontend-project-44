import readlineSync from "readline-sync";

function showBaseGameStart() {
  console.log("Welcome to the Brain Games!");
}

function askName() {
  return readlineSync.question("May I have your name? ");
}

function showGreetings(name) {
  console.log(`Hello, ${name}!`);
}

function showRules(rules) {
  console.log(rules);
}

function showQuestion(question) {
  console.log(`Question: ${question}`);
}

function askAnswer() {
  return readlineSync.question("Your answer: ");
}

function showFailedMessage(rightAnswer, wrongAnswer) {
  console.log(
    `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
  );
}
function showMessage(message) {
  console.log(message);
}

export {
  showBaseGameStart,
  askName,
  showGreetings,
  showRules,
  showQuestion,
  askAnswer,
  showFailedMessage,
  showMessage,
};
