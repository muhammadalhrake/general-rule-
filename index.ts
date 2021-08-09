// Import stylesheets
import './style.css';
import random from 'random';
function between(min: number, max: number) {
  return random.int(min, max);
}
let possibility = new Array();
const generateQuestion = (count: number,digits: string[],digits2: string[]) => {
  let generation = new Array();
  while (count > 0) {
    digits.map(indexDigigt1 =>
      digits2.map(indexDigigt2 => {
        const digit = +indexDigigt1;
        const digit2 = +indexDigigt2;
        let GG = generate(possibility, digit, digit2);
        generation.push(GG);
        count--;
      })
    );
  }
  return generation;
};
const generate = (arr: string[], digit: number, digit2: number) => {
  let question = {
    copyarr: arr
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
    arr.push(ourNumber);
    return ourNumber;
  } else {
    return generate(arr, digit, digit2);
  }
};
//console.log(generateQuestion(40, ['1'], ['1']));

//console.log(generate([],3))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
