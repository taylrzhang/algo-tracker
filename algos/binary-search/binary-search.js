/** 704. Binary Search
 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

 You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//declare max, min, mid as the last, first, middle indexes
//while min less than max, reassign the bounderies to find the target
//if the mid num is target, return mid
//if target less than mid num, reassign max with mid
//otherwise, reassign min with mid +1
//if min equal to max not found the target in the while loop, return -1
const search = (nums, target) => {
  let min = 0,
    max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((max - min) / 2) + min;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      min = mid + 1;
    } else if (nums[mid] > target) {
      max = mid - 1;
    }
  }
  return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([1, 3, 5], 1));
console.log(search([3, 5], 3));
console.log(search([3, 5], 5));
console.log(search([1], 0));
