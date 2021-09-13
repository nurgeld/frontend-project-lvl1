import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (number, currNumber = 2) => {
  if (currNumber ** 2 > number) {
    return true;
  }
  if (number % currNumber === 0) {
    return false;
  }

  return isPrime(number, currNumber + 1);
};

export const runGameRound = () => {
  const question = getRandomNumber(1, 500);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => run(task, runGameRound);
