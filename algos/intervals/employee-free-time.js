/**
 * You’re given a list containing the schedules of multiple employees.
 * Each person’s schedule is a list of non-overlapping intervals in sorted order.
 * An interval is specified with the start and end time, both being positive integers. Your task is to find the list of intervals representing the free time for all the employees.
 *
 * @param {number[][]} schedule
 * @return {number}
 */

function employeeFreeTime(schedule) {
  //declare an empty schedule, merge everyone's schedule in it, find the empty space inbound
  let all = [];
  const free = [];

  for (let each of schedule) {
    all = all.concat(each);
  }
  all = all.sort((a, b) => a[0] - b[0]);
  all = merge(all);

  if (all.length === 1) return [];
  else {
    for (let i = 0; i < all.length - 1; i++) {
      free.push([all[i][1], all[i + 1][0]]);
    }
  }

  return free;
}

function merge(list) {
  console.log(list);
  const res = [list[0]];

  let prev = res[0];

  for (let i = 1; i < list.length; i++) {
    let curr = list[i];
    console.log(prev, curr);
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  console.log(res);
  return res;
}

const test = employeeFreeTime([
  [
    [1, 2],
    [5, 6],
  ],
  [[1, 3]],
  [[4, 10]],
]);
console.log(test); //-> [[3,4]]

// const test2 = employeeFreeTime([[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]])
// console.log(test2)
