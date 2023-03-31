/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = [0,1,1]
Output: []

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1,
      high = nums.length - 1;
    console.log(low, high);
    while (low < high) {
      if (nums[i] + nums[low] + nums[high] < 0) {
        low++;
      } else if (nums[i] + nums[low] + nums[high] > 0) {
        high--;
      } else {
        result.push([nums[i], nums[low], nums[high]]);
        break;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
