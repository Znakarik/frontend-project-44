import {
  askAnswer,
  askName,
  showBaseGameStart,
  showFailedMessage,
  showGreetings,
  showMessage,
  showQuestion,
  showRules,
} from './io.js';

function initGame(rightAnswers, rules) {
  const maxGameTry = rightAnswers.size;

  showBaseGameStart();
  const name = askName();
  showGreetings(name);
  showRules(rules);

  let currentWinAmount = 0;
  /* eslint-disable no-restricted-syntax */
  for (const [answerKey, rightAnswer] of rightAnswers) {
    currentWinAmount += 1;
    showQuestion(answerKey);
    const answer = askAnswer();
    /* eslint-disable eqeqeq */
    if (answer != rightAnswer) {
      showFailedMessage(rightAnswer, answer);
      showMessage(`Let's try again, ${name}!`);
      break;
    } else {
      showMessage('Correct!');
      if (currentWinAmount === maxGameTry) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
}

export default initGame;
