import { describe, expect, it, test } from "bun:test";
import dailyTemperatures from "../../src/stack/daily-temperatures";

describe("Daily Temperatures", () => {
  it("test 01", () => {
    const testTemperatures = [73, 74, 75, 71, 69, 72, 76, 73]

    const expectedResult = [1, 1, 4, 2, 1, 1, 0, 0]
    const actualResult = dailyTemperatures(testTemperatures)

    expect(expectedResult).toEqual(actualResult)
  })
})