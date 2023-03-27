const { isAnagram } = require("../algos/valid-anagram");

describe("isAnagram test", () => {
  let s, t;

  it("should return true if t is anagram of s", () => {
    s = "anagram";
    t = "nagaram";
    expect(isAnagram(s, t)).toBe(true);
  });

  it("should return true if t is not anagram of s", () => {
    s = "rat";
    t = "car";
    expect(isAnagram(s, t)).toBe(false);
    s = "anagram";
    t = "nagarem";
    expect(isAnagram(s, t)).toBe(false);
  });
});
