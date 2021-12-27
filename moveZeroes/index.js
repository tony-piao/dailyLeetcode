var moveZeroes = function (nums) {
  let a = 0;
  let b = 0;

  while (b < nums.length) {
    if(nums[b] !== 0) {
      const tmp = nums[a];
      nums[b] = nums[a];
      nums[a] = tmp

      a++
    }

    b++
  }
};