/**
 * You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

**
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  //loop through equations store src -> target and weight in cache
  //loop through queries
  //loop through cache with bfs to find target, store curr v and wright in queue
  //if src or target not in cache return -1
  //otherwise find target in cache, multipied weights, and store in queue
  let cache = {};
  equations.forEach((e, i) => {
    if (!cache[e[0]]) cache[e[0]] = [[e[1], values[i]]];
    else cache[e[0]].push([e[1], values[i]]);
    if (!cache[e[1]]) cache[e[1]] = [[e[0], 1 / values[i]]];
    else cache[e[1]].push([e[0], 1 / values[i]]);
  });

  let result = [];
  for (let q of queries) {
    result.push(bfs(q[0], q[1]));
  }

  return result;

  function bfs(src, target) {
    if (!cache[src] || !cache[target]) return -1;
    let que = [[src, 1]];
    let seen = new Set();
    seen.add(src);
    while (que.length > 0) {
      [n, w] = que.shift();
      console.log(n, target);

      if (n === target) return w;
      for (let nei of cache[n]) {
        if (!seen.has(nei[0])) {
          que.push([nei[0], w * nei[1]]);
          seen.add(nei[0]);
        }
      }
    }
    return -1;
  }
};

let equations = [
  ["a", "b"],
  ["b", "c"],
];
let values = [2.0, 3.0, 4.0];
let queries = [
  ["a", "a"],
  // ["b", "a"],
  // ["a", "d"],
  // ["a", "a"],
  // ["x", "x"],
];
console.log(calcEquation(equations, values, queries)); //-> [6.00000,0.50000,-1.00000,1.00000,-1.00000]
