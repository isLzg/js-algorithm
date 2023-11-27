import { describe, expect, it } from "bun:test";
import threeSum from "../../src/two-pointers/three-sum";

describe("Three Sum", () => {
  it("test 01", () => {
    const testArray = [-1, 0, 1, 2, -1, -4]

    const expectedArray = [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
    const actualArray = threeSum(testArray)

    expect(expectedArray).toEqual(actualArray)
  })
})