/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //loop through nums from the beginning
  //set the curr prod as prefix
  //set prefix as curr num multiplied by last prefix
  //loop through nums from the end
  //set the curr prod as prefix multiplied by postfix
  //set postfix as curr num multiplied by last postfix
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
