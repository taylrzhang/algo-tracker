/** 153. Find Minimum in Rotated Sorted Array
 Given the sorted rotated array nums of unique elements, return the minimum element of this array.

 * @param {number[]} nums
 * @return {number}
 */

const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(mid, nums[mid], nums[right]);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
