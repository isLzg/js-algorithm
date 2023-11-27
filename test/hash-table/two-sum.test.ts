import { describe, expect, it } from 'bun:test'
import twoSum from '../../src/hash-table/two-sum'

describe("tow sum", () => {

  it("two sum", () => {
    const numArray = [2, 7, 11, 15]
    const target = 9

    const expectedResult = [2, 7]
    const actualResult = twoSum(numArray, target)

    expect(expectedResult).toEqual(actualResult)
  })
})