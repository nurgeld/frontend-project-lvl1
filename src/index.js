import readlineSync from 'readline-sync';

const steps = 3;
export default (game) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  const [task, gameParts] = game;

  console.log(task);

  let i = 1;
  while (i <= steps) {
    const [question, correctAnswer] = gameParts();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
