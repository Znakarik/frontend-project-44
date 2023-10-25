import readlineSync from 'readline-sync';

export default class CustomReadlineSync {
  send (str) {
    console.log(str);
  };

  receive = (str) => readlineSync.question(str);
}
