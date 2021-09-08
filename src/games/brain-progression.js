import gameEngine from '../index.js';

const task = 'What number is missing in the progression?';

export const getElementOfProgression = (a, d, n) => a + ((n - 1) * d);

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const progressionGameLogic = () => {
  const firstElement = random(1, 15);
  const step = random(1, 15);
  const lengthOfProgression = random(5, 15);
  const position = random(2, lengthOfProgression);
  const answer = getElementOfProgression(firstElement, step, position);
  const progression = [];
  let i = 0;
  while (i < lengthOfProgression) {
    const element = i === position ? '..' : getElementOfProgression(firstElement, step, i);
    progression.push(element);
    i += 1;
  }
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => gameEngine([task, progressionGameLogic]);
