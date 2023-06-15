/**
 Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 Output: [[1,6],[8,10],[15,18]]

 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals) => {
  //sort
  //declare prev,curr, reassign end time
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  const merged = [prev];

  for (let curr of intervals) {
    if (prev[1] >= curr[0]) {
      //overlapped
      prev[1] = Math.max(curr[1], prev[1]); //take the largest end number
    } else {
      merged.push(curr); //push it until no more to be merged
      prev = curr;
    }
  }
  return merged;
};

const test = merge([
  [1, 3],
  [3, 9],
  [2, 6],
  [15, 18],
]);
console.log(test);
