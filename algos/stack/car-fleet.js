/**
 There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
 */

function carFleet(target, position, speed) {
  //if two car in stack and collison, then pop it from stack
  let pair = [];
  for (let i = 0; i < position.length; i++) {
    pair.push([position[i], speed[i]]);
  }
  pair = pair.sort((a, b) => b[0] - a[0]);
  let stack = []; //time to target
  for (let car of pair) {
    let [p, s] = car;
    stack.push((target - p) / s);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2] //the last one is faster then(less than) the prev
    ) {
      stack.pop();
    }
  }
  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
