function findNextFibo(num_) {
  let [a, b] = [1, 1];
  while (b <= num_) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(findNextFibo(19));
