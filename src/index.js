import readlineSync from 'readline-sync';

const maxStepsCount = 3;
export default (task, gameParts) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(task);

  for (let i = 0; i < maxStepsCount; i += 1) {
    const [question, correctAnswer] = gameParts();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
