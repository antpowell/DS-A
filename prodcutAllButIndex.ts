const productAllButIndex = (arr: number[]) => {
  const sum = arr.reduce((acc, value) => acc * value);

  const product = arr.map((value) => {
    return sum / value;
  });
  return product;
};

console.log(productAllButIndex([1, 2, 3, 4, 5]));
console.log(productAllButIndex([1, 2, 3, 4]));
