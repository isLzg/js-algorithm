import { describe, expect, it } from "bun:test";
import singleNumber from "../../src/hash-table/single-number";

describe("Single Number", () => {
  it("test 01", () => {
    const numArray = [4, 1, 2, 1, 2]
    const expectedResult = 4
    const actualResult = singleNumber(numArray)

    expect(expectedResult).toBe(actualResult)
  })
})