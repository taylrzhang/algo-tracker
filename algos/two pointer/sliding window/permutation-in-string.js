/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Input: s1 = "ab", s2 = "eidbaooo"
Output: true

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  //EDGE CASE
  if (s1.length > s2.length || s2.length === 0) return false;

  let arr1 = Array(26).fill(0);
  let arr2 = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    arr1[s1[i].charCodeAt() - "a".charCodeAt()]++;
    arr2[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = s1.length; i < s2.length; i++) {
    if (arr1.every((el, i) => el === arr2[i])) return true;

    let prev = s2[i - s1.length].charCodeAt() - "a".charCodeAt();
    let next = s2[i].charCodeAt() - "a".charCodeAt();
    arr2[prev]--;
    arr2[next]++;
  }

  if (arr1.every((el, i) => el === arr2[i])) return true;
  else return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
