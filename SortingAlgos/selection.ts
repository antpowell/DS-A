let iteration = 0;
const swap = (arr: Array<number>, position1: number, position2: number) => {
    const localHolder = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = localHolder;

    iteration++;
    console.table(iteration, [arr.join()]);
}

export const selectionSort = (arr: Array<number>) => {
    let localMiniPointer = 0;
    let currentPointer = 0;
    let endOfSortedSegment = 0;

    console.log(`Array starting point ${arr}`);

    while (endOfSortedSegment < arr.length - 1) {
        if (arr[currentPointer] < arr[localMiniPointer] && localMiniPointer >= endOfSortedSegment) {
            localMiniPointer = currentPointer;
        }
        if (currentPointer === arr.length - 1) {
            swap(arr, endOfSortedSegment, localMiniPointer);
            
            endOfSortedSegment++;
            currentPointer = endOfSortedSegment;
        }
        currentPointer++;
    }

    return arr;
}

console.log(selectionSort([2, 8, 5, 3, 9, 4, 1]));