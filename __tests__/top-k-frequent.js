const { topKFrequent } = require("../algos/top-k-frequent");

describe("top k frequent test", () => {
  let nums, k;

  it("returns top k frequent elements in the array", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(topKFrequent([1, 2, 3, 1, 2], 2)).toEqual([1, 2]);
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it("handle nagative numbers", () => {
    expect(topKFrequent([-1, -1, -2, 0, 0, 0], 2)).toEqual([0, -1]);
  });

  it("handle one number", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
