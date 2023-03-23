/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * Example: Input: nums = [1,2,3,1]
            Output: true
            Input: nums = [1,2,3,4]
            Output: false
            Input: nums = [1,1,1,3,3,4,3,2,4,2]
            Output: true


 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const newSet = new Set(nums);
  // console.log(newSet.size)
  if (newSet.size !== nums.length) return true;
  else return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));

module.exports = { containsDuplicate };
