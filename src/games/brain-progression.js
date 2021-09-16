import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'What number is missing in the progression?';

const calculateElementOfProgression = (first, difference, index) => first + index * difference;

export const generateProgression = (first, difference, lengthOfProgression, indexToMask = null) => {
  const progression = [];
  for (let n = 0; n < lengthOfProgression; n += 1) {
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
  const lengthOfProgression = getRandomNumber(5, 15);
  const indexOfMaskedElement = getRandomNumber(0, lengthOfProgression - 1);
  const question = generateProgression(first, difference, lengthOfProgression, indexOfMaskedElement);
  const answer = calculateElementOfProgression(firstTerm, commonDifference, indexOfMaskedElement);

  return [question, String(answer)];
};

export default () => run(task, runGameRound);
