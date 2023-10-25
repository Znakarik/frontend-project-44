export default class PostAnswerAware {
  constructor(positive, negative) {
    this.usePositive = positive;
    this.useNegative = negative;
  }

  getPositive(name) {
    if (this.usePositive) {
      return `Congratulations, ${name}!`;
    }
    throw new Error('should not use positive');
  }

  getNegative = (rightAnswer, wrongAnswer) => {
    if (this.useNegative) {
      return `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
    }
    throw new Error('should not use negative');
  };

  shouldUsePositive() {
    return this.usePositive;
  }

  shouldUseNegative() {
    return this.useNegative;
  }
}
