function twoSum(nums: number[], target: number): number[] {
    let returnValue: Array<number> = [];
 
    for(let index = 0; index < nums.length; index++){
        let internalPointer = index+1;
        if(returnValue.length == 2 ){
            index = nums.length;
            console.log(returnValue);
        }else{
            while(nums[index] + nums[internalPointer] != target && internalPointer != nums.length){
                internalPointer++;
            }
            if(nums[index] + nums[internalPointer] === target){
                returnValue = [index, internalPointer];
            }
        }
    }
    return returnValue
 }
 

//  console.log(twoSum([2,5,5,11], 10));


const twoSumTwo=(nums: number[], target: number): number[]=> {
    const holderMap = new Map();
    let returnValue: Array<number> = [];
    nums.forEach((value,index) => {
        const matchingValue = target - value;
        if(holderMap.has(matchingValue)){
            returnValue = [holderMap.get(matchingValue), index];
        }
        holderMap.set(value, index);
    })
    return returnValue;
 };

 console.log(twoSumTwo([2,5,5,11], 10));