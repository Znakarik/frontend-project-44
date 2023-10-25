import readlineSync from 'readline-sync';
import { GameEngine } from '../GameEngine.js';
import { ProgressionQuestionGenerator } from './ProgressionQuestionGenerator.js';
import { RuleAware } from '../general/RuleAware.js';
import { PostAnswerAware } from '../general/PostAnswerAware.js';
import { CustomReadlineSync } from '../CustomReadlineSync.js';

const game = () => {
  new GameEngine(new CustomReadlineSync()).execute(
    new ProgressionQuestionGenerator(),
    new RuleAware('What number is missing in the progression?'),
    new PostAnswerAware(true, true),
  );
};

export default game;
