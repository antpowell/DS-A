const heapify = (
  arr: Array<number>,
  size: number,
  index: number,
) => {
  const left = index * 2 + 1;
  const right = index * 2 + 2;

  let largest = index;

  if (arr[left] > arr[largest]) {
    largest = left;
  }
  if (arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != index) {
    const holder = arr[index];
    arr[index] = arr[largest];
    arr[largest] = holder;
    heapify(arr, size, largest);
  }
};

const buildMaxHeap = (arr: Array<number>) => {
  if (arr.length == 0) {
    return;
  }

  const leavesStartingIndex = arr.length / 2;

  const leaves = [arr.slice(leavesStartingIndex, arr.length)];
  console.log(...leaves);

  for (let i = leavesStartingIndex; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
};

const arr = [23, 15, 21, 14, 7, 6, 17, 27];

buildMaxHeap(arr);
console.log(...arr);
