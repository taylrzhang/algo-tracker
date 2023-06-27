/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
  //cache: num, frequency
  //loop though nums, store frequency in cache
  //sort frequency, store in a new array
  //if frequency larger than k, return nums
  const cache = {};
  nums.forEach((num) => {
    if (!cache[num]) cache[num] = 0;
    cache[num]++;
  });
  let result = Object.keys(cache).map((key) => [Number(key), cache[key]]);
  // console.log(result);
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
module.exports = { topKFrequent };
