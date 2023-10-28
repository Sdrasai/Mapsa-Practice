// 1.
function primeFactors(number) {
  let result = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && number <= 30) {
      number = number / i;
      result.push(i);
    } else if (number >= 30) {
      console.log("Write A Number Between 0 To 30!!!");
      break;
    }
  }
  return result;
}
console.log(primeFactors(20));

// 2.
// Done With Sepehr's Helps
function largestIndex(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result,
    max = 0;
  str = str.toLowerCase();

  for (let char of str) {
    index = alphabet.indexOf(char) + 1;
    if (index > max) {
      max = index;
      result = "Character: " + char + max;
    }
  }
  return result;
}
console.log(largestIndex("FlaVio"));

// 3.
// NOT REALLY NICE :)
function roll() {
  let sides = 6;
  let badShansi = 0;
  let randomNumber = Math.floor(Math.random() * sides) + 1;
  if (randomNumber === 1) {
    randomNumber == badShansi;
    return badShansi;
  } else if (randomNumber === 6) {
    khoshShansi = randomNumber * 2;
    return khoshShansi;
  } else {
    return randomNumber;
  }
}

console.log(roll());

// .4
// With the help of Sepehr codes
function makeRug(m, n, str = "") {
  let result = [];
  for (let i = 0; i < m; i++) {
    result.push(str.repeat(n));
  }
  return result;
}
console.log(makeRug(2, 2, "A"));
