export class PostAnswerAware {

    getNegative = (rightAnswer, wrongAnswer) => {
        return `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
    }
}
