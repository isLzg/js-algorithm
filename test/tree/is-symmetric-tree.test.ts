import { describe, expect, it } from "bun:test";
import ThreeNode from "../../src/tree/base";
import isSymmetricTree from "../../src/tree/is-symmetric-tree";

describe("Is Symmetric Tree", () => {
  it("test 01", () => {
    const testTree = new ThreeNode(1,
      new ThreeNode(2,
        new ThreeNode(3), new ThreeNode(4)),
      new ThreeNode(2,
        new ThreeNode(4), new ThreeNode(3)))

    const actualResult = isSymmetricTree(testTree)
    expect(actualResult).toBeTruthy()
  })
})