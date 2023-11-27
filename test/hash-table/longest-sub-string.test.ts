import { describe, expect, it } from "bun:test";
import lengthOfLongestSubString from "../../src/hash-table/longest-sub-string";

describe("get the length of longest sub string", () => {
  it("test 01", () => {
    const value = "pwwkew"
    const expectedResult = 3
    const actualResult = lengthOfLongestSubString(value)

    expect(expectedResult).toBe(actualResult)
  })

  it("test 02", () => {
    const value = 'bbbbb'
    const expectedResult = 1
    const actualResult = lengthOfLongestSubString(value)

    expect(expectedResult).toBe(actualResult)
  })
})