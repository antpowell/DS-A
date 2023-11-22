/*
    use median of three method to select pivot
    * look at the first, last, and middle element
    * sort them
    * choose middle element as pivot
*/
const medianOfThree = (arr: Array<number>) =>{
    if (arr.length < 3) {
        return arr[1];
    }
    const midPoint = Math.floor(arr.length / 2);
    const min = Math.min(arr[0], arr[midPoint], arr[arr.length - 1]);
    const max = Math.max(arr[0], arr[midPoint], arr[arr.length - 1]);
    let pivot = 0;
    [arr[0], arr[midPoint], arr[arr.length - 1]].forEach((value) => {
        if (value === min || value === max) {
            return;
        }
        pivot = value;
    });
    arr[0] = min;
    arr[arr.length - 1] = max;
    arr[midPoint] = pivot;
    return pivot
}

console.log(medianOfThree([4, 5, 15, 11, 6, 8, 1]))

export const quickSort = (arr: Array<number>): Array<number> => {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = medianOfThree(arr);
    const leftArray: Array<number> = [];
    const rightArray: Array<number> = [];

    arr.forEach((value) => {
        if (value === pivot) {
            return;
        }

        if (pivot < value) {
            rightArray.push(value);
        } else {
            leftArray.push(value);
        }
    });
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort([-1, 5, 3, -3, 14, 2, -10, 9, 11, 11, 14]));