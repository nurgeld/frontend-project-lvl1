import readlineSync from 'readline-sync';
// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: yes
// 'yes' is wrong answer ;(. Correct answer was 'no'.
// Let's try again, Bill!
export const greetUser = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
};

const steps = 3;
export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i <= steps) {
    const randNumber = Math.floor(Math.random() * 1000);
    const correctAnswer = randNumber % 2 === 0 ? 'no' : 'yes';
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        // console.log(`Let's try again, ${name}`);
    }
  }
  const randNumber = Math.floor(Math.random() * 1000);
  const correctAnswer = randNumber % 2 === 0 ? 'no' : 'yes';
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log('Let\'s try again,');
  }
};