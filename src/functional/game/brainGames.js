import {
  askName,
  showBaseGameStart,
  showGreetings,
  showRules,
} from '../general/io.js';

export default function startGame() {
  showBaseGameStart();
  const name = askName();
  showGreetings(name);
  showRules('Answer "yes" if the number is even, otherwise answer "no".');
}
