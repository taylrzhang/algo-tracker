const { groupAnagrams } = require("../algos/group-anagrams");

describe("group anagrams test", () => {
  let strs;

  it("should group words into anagram groups", () => {
    strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    const result = groupAnagrams(strs);
    expect(result).toHaveLength(expectedOutput.length);
    expectedOutput.forEach((expected) => {
      expect(result).toContainEqual(expect.arrayContaining(expected));
    });
  });
  //write test cases for group anagrams
  it("Handles single input", () => {
    strs = [""];
    expect(groupAnagrams(strs)).toEqual([[""]]);
    strs = ["a"];
    expect(groupAnagrams(strs)).toEqual([["a"]]);
  });

  it("Handles input with no anagrams", () => {
    strs = ["hello", "world"];
    expect(groupAnagrams(strs)).toEqual([["hello"], ["world"]]);
  });
});
