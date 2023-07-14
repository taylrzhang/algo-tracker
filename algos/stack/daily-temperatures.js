//monotonic decreasing
/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  let stack = [];
  let res = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    //compare curr t with top of stack, if t larger than top, push count to res and pop, otherwise push value and index to stack
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      let top = stack[stack.length - 1];
      res[top[1]] = i - top[1];
      stack.pop();
    }
    stack.push([t, i]);
  }
  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
