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
  // const newSet = new Set(nums);
  // // console.log(newSet.size)
  // if (newSet.size !== nums.length) return true;
  // else return false;

  let newSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (newSet.has(nums[i])) return true;
    newSet.add(nums[i]);
  }
  return false;
};

module.exports = { containsDuplicate };
