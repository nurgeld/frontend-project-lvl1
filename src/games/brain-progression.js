import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'What number is missing in the progression?';

export const calculateElementOfProgression = (firstTerm, commonDifference, index) => {
  return firstTerm + index * commonDifference;
};

export const generateProgression = (firstTerm, commonDifference, lengthOfProgression) => {
  const progression = [];
  for (let n = 0; n < lengthOfProgression; n += 1) {
    const nthTerm = firstTerm + n * commonDifference;
    progression.push(nthTerm);
  }
  const indexOfElementToMask = getRandomNumber(0, lengthOfProgression - 1);
  progression[indexOfElementToMask] = '..';
  return progression.join(' ');
};

export const runGame = () => {
  const firstTerm = getRandomNumber(-15, 15);
  const commonDifference = getRandomNumber(1, 15);
  const lengthOfProgression = getRandomNumber(5, 15);
  const progression = generateProgression(firstTerm, commonDifference, lengthOfProgression);
  const question = progression;
  let indexOfMaskedElement;
  const elementsOfProgression = progression.split(' ');
  for (let i = 0; i < elementsOfProgression.length; i += 1) {
    if (elementsOfProgression[i] === '..') {
      indexOfMaskedElement = i;
    }
  }
  const answer = calculateElementOfProgression(firstTerm, commonDifference, indexOfMaskedElement);

  return [question, String(answer)];
};

export default () => run(task, runGame);
