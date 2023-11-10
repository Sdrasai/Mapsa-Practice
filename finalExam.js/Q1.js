const arr = ["one", "one", "one", "two", "two", "three"];

const count = {};
arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});

console.log(count);
