/**
 * 424. Longest Repeating Character Replacement
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Input: s = "ABAB", k = 2
Output: 4

Input: s = "AABABBA", k = 1
Output: 4
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  //find valid window by increasing r pointer, and num of chars allowed to replace is no more than k
  let l = 0,
    r = 0;
  let maxf = 0; //max frequnce number of counted chars,
  //even if it decreased by moving l pointer, it can remain the same
  let res = 0;
  let m = {};

  while (r < s.length) {
    m[s[r]] ? m[s[r]]++ : (m[s[r]] = 1);
    maxf = Math.max(m[s[r]], maxf);

    while (r - l + 1 - maxf > k) {
      m[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
};
