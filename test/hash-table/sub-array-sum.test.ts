import { describe, expect, it } from "bun:test";
import subArraySum from "../../src/hash-table/sub-array-sum";

describe("Sub Array Sum", () => {
  it("test 01", () => {
    const testArray = [1, 1, 1]
    const testK = 2

    const expectedResult = 2
    const actualResult = subArraySum(testArray, testK)
    expect(actualResult).toBe(expectedResult)
  })
})