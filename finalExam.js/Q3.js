function convert(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item.symbol === "inch") {
      result.push({ value: item.value * 2.5, symbol: "cm" });
    } else if (item.symbol === "cm") {
      result.push({ value: item.value / 2.5, symbol: "inch" });
    }
  }
  return result;
}

console.log(convert([{ value: 12, symbol: "inch" }]));
