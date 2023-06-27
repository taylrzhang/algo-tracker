/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  //if length of s and t is different return false
  //store s letters in cache
  //loop through t, if meet the same letter than value minus 1
  //loop through cache
  //if value not equal to 0 return false
  //otherwise return true
  const cache = {};
  for (let i = 0; i < s.length; i++) {
    if (!cache[s[i]]) cache[s[i]] = 0;
    cache[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (cache[t[i]]) cache[t[i]]--;
    else return false;
  }

  return true;
};

module.exports = { isAnagram };
