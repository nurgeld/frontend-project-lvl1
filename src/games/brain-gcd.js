import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'Find the greatest common divisor of given numbers.';

export const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcd(number2, number1 % number2);
};

export const runGameRound = () => {
  const number1 = getRandomNumber(1, 200);
  const number2 = getRandomNumber(1, 200);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, String(answer)];
};

export default () => run(task, runGameRound);
