const { twoSum } = require("../algos/two-sum.js");

describe("twoSum test", () => {
  let arr;

  it("should return true if two numbers sum to n", () => {
    arr = [1, 4, 7, 12, 9];
    expect(JSON.stringify(twoSum(arr, 10))).toBe(JSON.stringify([0, 4]));
    arr = [1, 4, 7, 12, 9];
    expect(JSON.stringify(twoSum(arr, 16))).toBe(JSON.stringify([1, 3]));
    arr = [1, 4, 7, 2, 9, 0];
    expect(JSON.stringify(twoSum(arr, 7))).toBe(JSON.stringify([2, 5]));
  });

  it("should work with negative numbers", () => {
    arr = [-1, 4, 6, 12, 9];
    expect(JSON.stringify(twoSum(arr, 8))).toBe(JSON.stringify([0, 4]));
    arr = [-1, -1, -2, -4, -5];
    expect(JSON.stringify(twoSum(arr, -2))).toBe(JSON.stringify([0, 1]));
  });

  it("should return [] if two numbers DO NOT sum to n", () => {
    arr = [1, 4, 6, 12, 9];
    expect(JSON.stringify(twoSum(arr, 2))).toBe(JSON.stringify([]));
    arr = [1, 4, 6, 12, 9];
    expect(JSON.stringify(twoSum(arr, 45))).toBe(JSON.stringify([]));
    arr = [1, 4, 7, 2, 9, 0];
    expect(JSON.stringify(twoSum(arr, 17))).toBe(JSON.stringify([]));
  });
});
