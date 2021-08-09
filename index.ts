// Import stylesheets
import './style.css';
import random from 'random';
import { ansArray } from './general-answer';
function between(min: number, max: number) {
  return random.int(min, max);
}
let possibility = new Array();
const generateQuestion = (
  count: number,
  digits: string[],
  digits2: string[]
) => {
  let generation = new Array();
  while (count > 0) {
    digits.map(indexDigigt1 =>
      digits2.map(indexDigigt2 => {
        const digit = +indexDigigt1;
        const digit2 = +indexDigigt2;
        let GG = generate(possibility, digit, digit2);
        const question = GG.generate;
        possibility = GG.copyarr;
        generation.push(question);
        count--;
      })
    );
  }
  return generation;
};
const generate = (arr: string[], digit: number, digit2: number) => {
  let question = {
    copyarr: arr,
    generate: {
      answers: [5, 5, 5, 5],
      firstNumber: 5,
      secondNumber: 5
    }
  };
  let fN = between(
    +new Array(digit).fill(1).join(''),
    +new Array(digit).fill(9).join('')
  );
  let sN = between(
    +new Array(digit2).fill(1).join(''),
    +new Array(digit2).fill(9).join('')
  );
  let ourNumber = fN.toString() + '*' + sN.toString();
  if (arr.indexOf(ourNumber) == -1) {
    question.copyarr.push(ourNumber);
    question.generate.answers = ansArray(fN, sN);
    question.generate.firstNumber = fN;
    question.generate.secondNumber = sN;
    return question;
  } else {
    return generate(arr, digit, digit2);
  }
};
//console.log(generateQuestion(40, ['1'], ['1','5']));

//console.log(generate([],3))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
