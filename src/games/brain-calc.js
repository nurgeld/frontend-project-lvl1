import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'What is the result of the expression?';

const calculate = (operand1, operand2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      console.log('unexpected operation!');
      break;
  }
  return result;
};

export const runGameRound = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculate(operand1, operand2, operator);
  return [question, String(answer)];
};

export default () => run(task, runGameRound);
