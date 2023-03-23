const { containsDuplicate } = require("../algos/Contain-Duplicate");

describe("containsDuplicate test", () => {
  let nums;

  it("should return false if the nums has duplicate", () => {
    nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("should return true if the nums does not have duplicate", () => {
    nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
    nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
