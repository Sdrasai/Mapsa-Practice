// function findSumIndexOf(num, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(findSumIndexOf(56, [1, 21, 35, 42, 82]));

function find(array, sum) {
  let answer = {};
  for (const num of array) {
    if (answer[num]) {
      return { first: sum - num, second: num };
    }
    answer[sum - num] = true;
  }
  return false;
}

let arr = [2, 5, 7, 3, 82];

console.log(find(arr, 84));
