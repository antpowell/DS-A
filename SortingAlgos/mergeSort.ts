const merge = (leftArr: Array<number>, rightArr: Array<number>) => {
    const leftPointer = 0;
    const rightPointer = 0;
    const returnArr = [];
    let returnArrPointer = 0;
    const returnArrMaxSize = leftArr.length + rightArr.length

    while (returnArrPointer != returnArrMaxSize) {
        if (rightArr.length === 0) {
            returnArr.push(...leftArr);
            returnArrPointer += leftArr.length;
        }
        if (leftArr.length === 0) {
            returnArr.push(...rightArr);
            returnArrPointer += rightArr.length;
        }

        if ((leftArr[leftPointer] < rightArr[rightPointer])) {
            returnArr.push(leftArr[leftPointer]);
            returnArrPointer++;
            leftArr.reverse();
            leftArr.pop();
            leftArr.reverse();
        }
        if ((leftArr[leftPointer] >= rightArr[rightPointer])) {
            returnArr.push(rightArr[rightPointer]);
            returnArrPointer++;
            rightArr.reverse();
            rightArr.pop();
            rightArr.reverse();
        }
    }

    console.log(`array merged: ${returnArr}`);
    return returnArr;
};

export const mergeSort = (arr: Array<number>): Array<number> => {

    if (arr.length === 1) {
        return arr;
    }

    const splitPoint = Math.floor(arr.length / 2);
    const rightArray = arr.slice(splitPoint);
    const leftArray = arr.slice(0, splitPoint)

    console.table( [`left: ${leftArray}`, `right: ${rightArray}`])
    
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);
    console.table( [`leftSorted: ${sortedLeft}`, `rightSorted: ${sortedRight}`])
    return merge(sortedLeft, sortedRight);
}


console.log(mergeSort([3, 2, 8, 4, 7, 1, 5, 3]));

type Test ={
    found: boolean,
    values?: Array<number>
}

const test: Test = {found: true, values: [0,1]}
test.found