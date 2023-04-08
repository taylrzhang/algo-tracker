/** 33. Search in Rotated Sorted Array
 Given a sorted integer array, nums, and an integer value, target, the array is rotated by some arbitrary number. Search and return the index of target in this array. If the target does not exist, return -1.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const rotatedSearch = (nums, target) => {
  //edge case: only 2 nums in an array
  //find the sorted array
  //check if the target is in sorted half array
  //if not we can shrink array by search in the sorted part and repeat it again

  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);
    console.log(min, max, mid);
    if (nums[mid] === target) return mid;
    if (nums[min] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[min]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    } else {
      if (target <= nums[max] && target > nums[mid]) {
        console.log(min, max, mid);
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  }
  return -1;
};

console.log(rotatedSearch([3, 1], 1));
