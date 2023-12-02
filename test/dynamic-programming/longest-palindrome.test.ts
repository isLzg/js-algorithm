import { describe, expect, it } from "bun:test";
import longestPalindrome from "../../src/dynamic-programming/longest-palindrome";

describe("Longest palindrome", () => {
  it("test 01", () => {
    const testString = 'babad'

    const expectedResult = 'aba'
    const actualResult = longestPalindrome(testString)
    expect(actualResult).toBe(expectedResult)
  })
})