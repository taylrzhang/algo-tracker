/* Array 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //declare a chacke object to store num and index
  //loop through nums
  //diff is target minus curr value
  //if found diff, return [curr index and diff index]
  //otherwise return empty array
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    // console.log(cache[diff]);
    if (cache[diff] !== undefined) {
      return [cache[diff], i];
    }
    cache[nums[i]] = i;
  }
  return [];
};

// console.log(twoSum([1, 4, 7, 2, 9, 0], 7));

module.exports = { twoSum };
