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
// var threeSum = function (nums) {
//   const result = [];
//   nums = nums.sort((a, b) => a - b);
//   console.log(nums);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i - 1] === nums[i]) {
//       continue;
//     }
//     let low = i + 1,
//       high = nums.length - 1;
//     console.log(low, high);
//     while (low < high) {
//       if (nums[i] + nums[low] + nums[high] < 0) {
//         low++;
//       } else if (nums[i] + nums[low] + nums[high] > 0) {
//         high--;
//       } else {
//         result.push([nums[i], nums[low], nums[high]]);
//         break;
//       }
//     }
//   }
//   return result;
// };
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};

console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
