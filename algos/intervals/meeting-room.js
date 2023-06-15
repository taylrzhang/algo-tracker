/**
 * can this person attend all meetings.
 */

//-> is there any intervals overlapped

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  //loop through intervals
  //check if overlapped, if yes return false
  for (let i = 0; i < intervals.length - 1; i++) {
    let prev = intervals[i];
    let curr = intervals[i + 1];

    //no need to compare the other situation due to comparing inside a sorted array
    if (prev[1] > curr[0]) {
      return false;
    }
  }
  //return true
  return true;
};
