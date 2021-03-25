import hasDuplicates from "./hasDuplicates";

describe("hasDuplicates test", () => {
  it("should not fail when there are duplicate 0s", () => {
    const withDuplicateZeros = [0, 0, 0, 0, 1, 2, 3, 4, 5];
    expect(hasDuplicates(withDuplicateZeros)).toEqual(false);
  });

  it("should fail when array has duplicates excluding 0s", () => {
    const withDupes = [0, 1, 2, 3, 3, 5, 6, 7, 8];
    expect(hasDuplicates(withDupes)).toEqual(true);
  });
  it("should pass when array does NOT have duplicates excluding 0s", () => {
    const noDupes = [8, 0, 2, 0, 0, 0, 0, 0, 0];
    expect(hasDuplicates(noDupes)).toEqual(false);
  });
});
