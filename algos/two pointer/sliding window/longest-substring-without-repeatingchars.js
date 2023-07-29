/**
 * 3. Longest Substring Without Repeating Characters
  Given a string s, find the length of the longest substring without repeating characters.

  Input: s = "abcabcbb"
  Output: 3

  Input: s = "pwwkew"
  Output: 3
 */

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
  let left = 0,
    right = 0;
  let currLetters = new Set();
  let longestL = 0;
  while (left < s.length) {
    if (!currLetters.has(s[right]) && right < s.length) {
      currLetters.add(s[right]);
      right++;
    } else {
      longestL = Math.max(longestL, currLetters.size);
      currLetters.delete(s[left]);
      left++;
    }
  }
  return longestL;
}

// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
