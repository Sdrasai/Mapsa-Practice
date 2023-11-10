const myArr = [
  { a: [1, 2, 3], b: { c: 4 } },
  { a: [1, 2, 3], b: { c: 4 } },
];

console.log(JSON.stringify(myArr[0]) === JSON.stringify(myArr[1]));
