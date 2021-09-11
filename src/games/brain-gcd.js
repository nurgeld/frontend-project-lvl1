import run from '../index.js';
import getRandNum from '../randomizer.js';

const task = 'Find the greatest common divisor of given numbers.';

export const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

export const runGame = () => {
  const num1 = getRandNum(1, 200);
  const num2 = getRandNum(1, 200);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, String(answer)];
};

export default () => run(task, runGame);
