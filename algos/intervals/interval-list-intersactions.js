/**
 * You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let i = 0,
    j = 0;
  const result = [];

  while (i < firstList.length && j < secondList.length) {
    let [s1, e1] = firstList[i];
    let [s2, e2] = secondList[j];
    let maxStart = Math.max(s1, s2);
    let minEnd = Math.min(e1, e2);
    if (maxStart <= minEnd) {
      result.push([maxStart, minEnd]);
    }

    if (e1 <= e2) i++;
    else j++;
  }
  return result;
};
