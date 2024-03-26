function removeElement(nums: number[], val: number) {
  nums = nums.filter((value) => value != val);
  const size = nums.length;
  return ({ nums, size });
}

console.log(removeElement([3, 2, 2, 3], 3));
