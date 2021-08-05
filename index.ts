// Import stylesheets
import './style.css';
import random from 'random';
function between(min: number, max: number) {
  return random.int(min, max);
}
let possibility = new Array();
function generateNew(count: number, digits: string[]) {
  let generation = new Array();
  for (let i = 0; i < count; ) {
    for (let j = 0; j < digits.length && i < count; j++) {
      const digit = +digits[j];
      let GG = generate(possibility, digit);
      generation.push(GG);
      i++;
    }
  }
  return generation;
}
const generate = (arr: string[], digit: number) => {
  let fN = between(
    +new Array(digit).fill(1).join(''),
    +new Array(digit).fill(9).join('')
  );
  let sN = between(
    +new Array(digit).fill(1).join(''),
    +new Array(digit).fill(9).join('')
  );
  let ourNumber = fN.toString() + '*' + sN.toString();
  if (arr.indexOf(ourNumber) == -1) {
    arr.push(ourNumber);
    return ourNumber;
  } else {
    return generate(arr, digit);
  }
};
console.log(generateNew(40, ['1']));
//console.log(generate([],3))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
