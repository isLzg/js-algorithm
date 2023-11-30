import { describe, expect, it } from "bun:test";
import TreeNode from "../../src/tree/base";
import isSymmetricTree from "../../src/tree/is-symmetric-tree";

describe("Is Symmetric Tree", () => {
  it("test 01", () => {
    const testTree = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3), new TreeNode(4)),
      new TreeNode(2,
        new TreeNode(4), new TreeNode(3)))

    const actualResult = isSymmetricTree(testTree)
    expect(actualResult).toBeTruthy()
  })
})