import run from '../index.js';
import getRandNum from '../randomizer.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num, curr = 2) => {
  if (curr ** 2 > num) {
    return true;
  }
  if (num % curr === 0) {
    return false;
  }

  return isPrime(num, curr + 1);
};

export const runGame = () => {
  const question = getRandNum(1, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => run(task, runGame);
