/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let loRow = 0,
    hiRow = matrix.length - 1;
  let loCol = 0;
  hiCol = matrix[0].length - 1;
  while (loRow < hiRow) {
    let midRow = loRow + Math.floor((hiRow - loRow) / 2);
    if (matrix[midRow][loCol] > target) {
      hiRow = midRow;
      // } else if (matrix[midRow][hiCol] < target) {
      // console.log(loRow, hiRow)
    } else {
      loRow = midRow + 1;
      // return search(matrix[midRow], target);
    }
  }
  if (loRow === hiRow) return search(matrix[loRow], target);

  return false;
};

const search = (nums, target) => {
  let min = 0,
    max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((max - min) / 2) + min;
    if (nums[mid] === target) return true;
    if (nums[mid] < target) {
      min = mid + 1;
    } else if (nums[mid] > target) {
      max = mid - 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1], [3]], 3));

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(searchMatrix([[1]], 0));
