/**
 * find the minimum number of meeting rooms required to hold these meetings.
 * @param {number[][]} intervals
 * @return {number}
 */
//->max num of rooms were ongoing(busiset time)

var minMeetingRooms = function (intervals) {
  //loop through starts, compare curr start with upcoming end
  //if curr start<upcpming end, no one is ended, then open a new room
  //otherwise, curr end time is ended, merge in it, track next end

  let count = 0;
  let end = 0;

  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  for (let start of starts) {
    if (start < ends[end]) count++;
    else end++;
  }

  return count;
};
