const binarySearch = (arr: Array<number>, lookFor: number): boolean => {
  let found = false;

  if (arr.length === 0) {
    return found;
  }

  let pivot: number = Math.floor(arr.length / 2);

  if (lookFor === arr[pivot]) {
    found = true;
    return found;
  }

  if (arr.length === 1 && arr[0] != lookFor) {
    return found;
  }

  if (lookFor > arr[pivot]) {
    const rightArray = arr.slice(pivot, arr.length);
    pivot = Math.floor(rightArray.length / 2);
    return binarySearch(rightArray, lookFor);
  }
  if (lookFor < arr[pivot]) {
    const leftArray = arr.slice(0, pivot);
    pivot = Math.floor(leftArray.length / 2);
    return binarySearch(leftArray, lookFor);
  }

  return found;
};

console.log(binarySearch([1, 2, 4, 6, 9, 11], 4));
