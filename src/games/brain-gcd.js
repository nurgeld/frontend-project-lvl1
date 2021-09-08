import gameEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

export const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

export const gcdGameLogic = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, String(answer)];
};

export default () => gameEngine([task, gcdGameLogic]);
