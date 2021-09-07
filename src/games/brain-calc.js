import gameEngine from '../index.js';

const task = 'What is the result of the expression?';

export const calcGameLogic = () => {
  const operand1 = Math.floor(Math.random() * 100);
  const operand2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-'];
  const operator = operators[Math.round(Math.random())];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = operator === '+' ? operand1 + operand2 : operand1 - operand2;
  return [question, String(answer)];
};

export default () => gameEngine([task, calcGameLogic]);
