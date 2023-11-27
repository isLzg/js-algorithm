import { describe, expect, it } from "bun:test";
import intersection from "../../src/hash-table/intersection";

describe("Intersection", () => {
  it("test 01", () => {
    const testArray1 = [4, 9, 5]
    const testArray2 = [9, 4, 9, 8, 4]

    const expectedResult = [9, 4]
    const actualResult = intersection(testArray1, testArray2)

    expect(expectedResult).toEqual(actualResult)
  })
})