import gameEngine from '../index.js';
import getRandNum from '../randomizer.js';

const task = 'What is the result of the expression?';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+': {
      return operand1 + operand2;
    }
    case '-': {
      return operand1 - operand2;
    }
    default: {
      return operand1 * operand2;
    }
  }
};

export const runGame = () => {
  const operand1 = getRandNum(1, 100);
  const operand2 = getRandNum(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandNum(0, 2)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculate(operand1, operand2, operator);
  return [question, String(answer)];
};

export default () => gameEngine(task, runGame);
