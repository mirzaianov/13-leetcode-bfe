var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i < nums.length; i += 2) {
    res += Math.min(nums[i], nums[i + 1]);
  }

  return res;
};