import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'What number is missing in the progression?';

const calculateElementOfProgression = (first, difference, index) => first + index * difference;

export const generateProgression = (first, difference, progressionLength, indexToMask = null) => {
  const progression = [];
  for (let n = 0; n < progressionLength; n += 1) {
    const nthTerm = first + n * difference;
    progression.push(nthTerm);
  }
  if (indexToMask !== null) {
    progression[indexToMask] = '..';
    return progression.join(' ');
  }
  return progression.join(' ');
};

export const runGameRound = () => {
  const first = getRandomNumber(-15, 15);
  const difference = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 15);
  const indexOfMaskedElement = getRandomNumber(0, progressionLength - 1);
  const question = generateProgression(first, difference, progressionLength, indexOfMaskedElement);
  const answer = calculateElementOfProgression(first, difference, indexOfMaskedElement);

  return [question, String(answer)];
};

export default () => run(task, runGameRound);
