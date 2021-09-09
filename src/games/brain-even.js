/* eslint-disable linebreak-style */
import gameEngine from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGameLogic = () => {
  const question = Math.floor(Math.random() * 1000);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine([task, evenGameLogic]);
