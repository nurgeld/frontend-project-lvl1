import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

export const runGame = () => {
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => run(task, runGame);
