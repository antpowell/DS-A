const nums = [0, 1, 2, 2, 3, 0, 4, 2];

function removeElement(nums: number[], val: number): number {
  let index = 0;

  while (index < nums.length) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }

  //   nums.forEach((num, index) => {

  //   });
  console.log(nums);
  return nums.length;
}

// removeElement(nums, 2);

function removeDuplicates(nums: number[]): number {
  const max = 2;
  let seen = 1;
  let size = nums.length;
  let index = 0;
  while (index < size) {
    const currentValue = nums[index];
    const nextValue = nums[index + 1];
    if (seen < max) {
      if (currentValue === nextValue) {
        seen++;
        index++;
      } else {
        seen = 1;
        index++;
      }
    } else {
      if (currentValue === nextValue) {
        nums.splice(index, 1);
      } else {
        seen = 1;
        index++;
      }
    }
    size = nums.length;
  }
  console.log(nums.length);
  return nums.length;
}

removeDuplicates([1, 1, 1, 2, 2, 3]);
