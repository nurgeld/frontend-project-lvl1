import gameEngine from '../index.js';

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

export const primeGameLogic = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine([task, primeGameLogic]);
