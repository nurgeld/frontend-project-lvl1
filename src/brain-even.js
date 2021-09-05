/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const steps = 3;
export default () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(task);

  let i = 0;
  while (i <= steps) {
    const randNumber = Math.floor(Math.random() * 1000);
    const correctAnswer = randNumber % 2 === 0 ? 'no' : 'yes';
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
