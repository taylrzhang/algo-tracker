/**
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//intervals are sorted by start time and non-overlaped

var insert1 = function (intervals, newInterval) {
  if (!intervals) return [newInterval];
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    // new is before the start of curr interval, res concat with the rest intervals and return res
    //the curr interval is before new, push the curr to res
    //overlapped: reassign newInterval
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return (res = res.concat(intervals.slice(i, intervals.length)));
    } else if (intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }
  res.push(newInterval);
  return res;
};

function insert2(intervals, newInterval) {
  let res = [];

  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (
    i < intervals.length &&
    intervals[i][1] >= newInterval[0] &&
    intervals[i][0] <= newInterval[1]
  ) {
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i][1], newInterval[1]),
    ];

    i++;
  }
  res.push(newInterval);

  while (i < intervals.length && intervals[i][0] > newInterval[1]) {
    res.push(intervals[i]);
    i++;
  }
  return res;
}

const test = insert1(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8]
);
console.log(test); //-> [[1,2],[3,10],[12,16]]

const test1 = insert1(
  [
    [8, 10],
    [12, 16],
  ],
  [4, 6]
);
console.log(test1);
