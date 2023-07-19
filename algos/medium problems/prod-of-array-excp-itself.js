/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  //loop through nums from the beginning
  //put the curr prod as prefix
  //put prefix as curr num multiplied by last prefix

  //loop through nums from the end
  //put the curr prod as prefix multiplied by postfix
  //put postfix as curr num multiplied by last postfix
  const prods = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    prods[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    prods[i] *= postfix;
    postfix *= nums[i];
  }

  return prods;
};
