/**
 * Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;

  let Xoverlaps = false;
  let Yoverlaps = false;
  //Xoverlaps
  if (x1 < x4 && x3 < x2) Xoverlaps = true;
  //Yoverlaps
  if (y1 < y4 && y3 < y2) Yoverlaps = true;
  //if both, return true, otherwise, return false
  if (Xoverlaps && Yoverlaps) return true;
  return false;
};
