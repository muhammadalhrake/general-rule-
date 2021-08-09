// Import stylesheets
import './style.css';
import random from 'random';
function between(min: number, max: number) {
  return random.int(min, max);
}
let possibility = new Array();
function generateNew(count: number, digits: string[], digits2: string[]) {
  let generation = new Array();
  for (let i = 0; i < count; ) {
    for (let j = 0; j < digits.length && i < count; j++) {
      for (let k = 0; k < digits2.length && i < count; k++) {
        const digit = +digits[j];
        const digit2 = +digits2[k];
        let GG = generate(possibility, digit, digit2);
        generation.push(GG);
        i++;
      }
    }
  }
  return generation;
}
const generate = (arr: string[], digit: number, digit2: number) => {
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
console.log(generateNew(40, ['2', '5'], ['2', '4']));

//console.log(generate([],3))
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
