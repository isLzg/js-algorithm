import { beforeAll, describe, expect, it } from "bun:test";
import RecentCounter from "../../src/queue/recent-counter";

describe("Recent Ping Counter", () => {
  let counter: RecentCounter
  beforeAll(() => {
    counter = new RecentCounter()
  })

  it("init", () => {
    expect(counter.queue).toEqual([])
  })

  it('test 01', () => {
    const actualResult = counter.ping(1)
    expect(actualResult).toBe(1)
  })

  it('test 02', () => {
    const actualResult = counter.ping(100)
    expect(actualResult).toBe(2)
  })

  it('test 03', () => {
    const actualResult = counter.ping(3001)
    expect(actualResult).toBe(3)
  })

  it('test 04', () => {
    const actualResult = counter.ping(3002)
    expect(actualResult).toBe(3)
  })
})