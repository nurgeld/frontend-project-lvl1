import run from '../index.js';
import getRandNum from '../randomizer.js';

const task = 'What number is missing in the progression?';

export const getElementOfProgression = (a, d, n) => a + ((n - 1) * d);

export const generateProgression = (initialTerm, step, lengthOfProgression) => {
  const progression = [];
  for (let n = 1; n <= lengthOfProgression; n += 1) {
    const nthTerm = getElementOfProgression(initialTerm, step, n);
    progression.push(nthTerm);
  }
  return progression;
};

export const runGame = () => {
  const firstElement = getRandNum(-15, 15);
  const step = getRandNum(1, 15);
  const lengthOfProgression = getRandNum(5, 15);
  const position = getRandNum(2, lengthOfProgression);
  const progression = generateProgression(firstElement, step, lengthOfProgression);
  progression[position - 1] = '..';
  const question = progression.join(' ');
  const answer = getElementOfProgression(firstElement, step, position);

  return [question, String(answer)];
};

export default () => run(task, runGame);
