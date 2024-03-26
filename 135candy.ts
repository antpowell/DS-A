function candy(ratings: number[]): number {
  if (ratings.length === 1) {
    return 1;
  }

  let candyBag = ratings.length;
  const candyCollection = new Array(ratings.length).fill(1);
  candyCollection.fill(1);

  ratings.forEach((item, index) => {
    if (
      index - 1 >= 0 && index + 1 < ratings.length &&
      item > ratings[index + 1] && item > ratings[index - 1]
    ) {
      if (candyCollection[index + 1] > candyCollection[index - 1]) {
        candyBag -= candyCollection[index];
        candyCollection[index] = candyCollection[index + 1] + 1;
        candyBag += candyCollection[index];
      } else {
        candyBag -= candyCollection[index];
        candyCollection[index] = candyCollection[index - 1] + 1;
        candyBag += candyCollection[index];
      }
    } else if (index + 1 < ratings.length && item > ratings[index + 1]) {
      candyBag -= candyCollection[index];
      candyCollection[index] = candyCollection[index + 1] + 1;
      candyBag += candyCollection[index];
    } else if (index - 1 >= 0 && item > ratings[index - 1]) {
      candyBag -= candyCollection[index];
      candyCollection[index] = candyCollection[index - 1] + 1;
      candyBag += candyCollection[index];
    }
  });

  for (let i = ratings.length - 1; i >= 0; i--) {
    if (
      i - 1 >= 0 && i + 1 < ratings.length &&
      ratings[i] > ratings[i + 1] && ratings[i] > ratings[i - 1]
    ) {
      if (candyCollection[i + 1] > candyCollection[i - 1]) {
        candyBag -= candyCollection[i];
        candyCollection[i] = candyCollection[i + 1] + 1;
        candyBag += candyCollection[i];
      } else {
        candyBag -= candyCollection[i];
        candyCollection[i] = candyCollection[i - 1] + 1;
        candyBag += candyCollection[i];
      }
    } else if (i - 1 >= 0 && ratings[i] > ratings[i - 1]) {
      candyBag -= candyCollection[i];
      candyCollection[i] = candyCollection[i - 1] + 1;
      candyBag += candyCollection[i];
    } else if (i + 1 < ratings.length && ratings[i] > ratings[i + 1]) {
      candyBag -= candyCollection[i];
      candyCollection[i] = candyCollection[i + 1] + 1;
      candyBag += candyCollection[i];
    }
  }
  return candyBag;
}

const ratings = [1, 2, 87, 87, 87, 2, 1];
// const ratings = [1, 0, 2, 3, 4];
const ratings2 = [1, 0, 2];
// 1, 2, 3, 1, 3, 2, 1;AS

console.log(candy(ratings));
console.log(candy(ratings2));
