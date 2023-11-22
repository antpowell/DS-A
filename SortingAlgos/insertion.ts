const insertion = (arr: Array<number>, valuePointer:number, insertionPosition:number) => {
    const value = arr.splice(valuePointer, 1)[0];
    return arr = [...arr.slice(0,insertionPosition), value, ...arr.slice(insertionPosition, arr.length)];
}

export const insertionSort =(arr:Array<number>) => {
    for(let i = 1; i < arr.length; i++){
        let checkIndex = i;
        while(checkIndex > 0 && (arr[checkIndex] < arr[checkIndex-1])){
            arr = insertion(arr, checkIndex, checkIndex-1);
            checkIndex--;
        }
    }
    return arr;
}

console.log(insertionSort([8,2,1,4,3]));