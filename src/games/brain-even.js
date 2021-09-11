import gameEngine from '../index.js';
import getRandNum from '../randomizer.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

export const runGame = () => {
  const question = getRandNum(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(task, runGame);
