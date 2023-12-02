import { describe, expect, it } from "bun:test";
import fib from "../../src/dynamic-programming/fib";

describe("Fib", () => {
  it("test 01", () => {
    expect(fib(3)).toBe(2)
    expect(fib(5)).toBe(5)
  })
})