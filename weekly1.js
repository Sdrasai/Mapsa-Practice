// .1
const string = "TrAdE2W1n95";
let number;
function findFirstNumber(inputString) {
  const number = inputString.match(/\d+/)[0];
  return number;
}

const firstNumber = findFirstNumber(string);
console.log(firstNumber);

// .2
function countOnes(arr) {
  let count = 0;
  let inSequence = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (!inSequence) {
        inSequence = true;
        count++;
      }
    } else {
      inSequence = false;
    }
  }

  return count;
}

const numbers = [1, 0, 0, 1, 1, 0, 1, 1, 1];
const numberOfSequences = countOnes(numbers);
console.log(numberOfSequences);

// .4

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function isFactorialMatch(num1, num2) {
  return factorial(num1) === num2;
}

let num1 = 5;
let num2 = 120;

if (isFactorialMatch(num1, num2)) {
  console.log(true);
} else {
  console.log(false);
}

// 7.

const myArr = [84, 70, 42, 56];

function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }

  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function gcdArr(arr) {
  return arr.reduce((prevVal, currVal) => {
    return gcd(prevVal, currVal);
  });
}

console.log(gcdArr(myArr));

// 8.

const boxes = [2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2];
function boxCreation(arr) {
  let counter = 0;
  arr.reduce((prevVal, curVal) => {
    if (prevVal + curVal > 10) {
      counter++;
      return curVal;
    }
    return prevVal + curVal;
  });
  return counter + 1;
}
console.log(boxCreation(boxes));
