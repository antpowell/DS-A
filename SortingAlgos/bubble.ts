export const bubbleSort = (arr: Array<number>) => {
    let checkPoint = arr.length - 1;
    while (checkPoint >= 0) {
        arr.forEach((value, index) => {
            if ((index + 1) >= arr.length) {
                return;
            }
            if (value > arr[index + 1]) {
                arr[index] = arr[index + 1]
                arr[index + 1] = value
            }
        })
        checkPoint -= 1;
    }
    return arr;
}

// console.log(bubbleSort([4, 3, 1, 75, 8, -13, -1]));
console.log(bubbleSort([4, 3, 8, -13, -1]));
console.log(bubbleSort([4, 3]));
console.log(bubbleSort([4]));
console.log(bubbleSort([]));

const x: number = 121;

console.log(x.toString().split('').reverse().join(""));
console.log(x.toString().length)
console.log(x.toString()[2])
