/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 
 * @param {string[]} strs
 * @return {string[][]}
 */

//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
  //declare cache
  //loop through strs
  //declare sorted, assign with sorted curr str
  //if it not in cache, add it(sorted: str)
  //otherwaire push str to the sorted property
  //return object values
  const cache = {};
  strs.forEach((str) => {
    const sorted = str.split("").sort().join();
    if (!cache[sorted]) cache[sorted] = [str];
    else cache[sorted].push(str);
  });
  return Object.values(cache);
};

module.exports = { groupAnagrams };
