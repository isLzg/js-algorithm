import { describe, expect, it } from "bun:test";
import quickSort from "../../src/sort/quick";

describe("Quick Sort", () => {
  it("test 01", () => {
    const unsortedArray = [5, 3, 7, 2, 8, 4, 1, 6];

    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8]
    const actualResult = quickSort(unsortedArray)

    expect(actualResult).toEqual(expectedResult)
  })
})