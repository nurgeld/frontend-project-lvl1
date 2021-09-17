import run from '../index.js';
import getRandomNumber from '../randomizer.js';

const task = 'What number is missing in the progression?';

const calculateElementOfProgression = (first, difference, index) => first + index * difference;

const generateProgression = (first, difference, progressionLength) => {
  const progression = [];
  for (let n = 0; n < progressionLength; n += 1) {
    const nthTerm = first + n * difference;
    progression.push(nthTerm);
  }
  return progression;
};

const maskElement = (coll, index) => {
  const result = coll;
  result[index] = '..';
  return result;
};

export const runGameRound = () => {
  const first = getRandomNumber(-15, 15);
  const difference = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 15);
  const indexOfMaskedElement = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(first, difference, progressionLength);
  const maskedProgression = maskElement(progression, indexOfMaskedElement);
  const question = maskedProgression.join(' ');
  const answer = calculateElementOfProgression(first, difference, indexOfMaskedElement);

  return [question, String(answer)];
};

export default () => run(task, runGameRound);
