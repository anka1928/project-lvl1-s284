import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import { getRandom } from '../utils';

const operators = ['+', '-', '*'];
const randomIndex = Math.floor(Math.random() * 3);
const randomOperator = operators[randomIndex];

const queAndAnswer = () => {
  const firstNum = getRandom();
  const secondNum = getRandom();
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  let correctAnswer;

  switch (randomOperator) {
    case '+':
      correctAnswer = String(firstNum + secondNum);
      break;
    case '-':
      correctAnswer = String(firstNum - secondNum);
      break;
    default:
      correctAnswer = String(firstNum * secondNum);
  }
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

const game = () => {
  gameFlow(description, queAndAnswer);
};
export default game;