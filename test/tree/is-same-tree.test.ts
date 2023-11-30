import { describe, expect, it } from "bun:test";
import TreeNode from "../../src/tree/base";
import isSameTree from "../../src/tree/is-same-tree";

describe("Is Same Three", () => {
  it("test 01", () => {
    const nodeP = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    const nodeQ = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    const actualResult = isSameTree(nodeP, nodeQ)
    expect(actualResult).toBeTruthy()
  })

  it("test 02", () => {
    const nodeP = new TreeNode(1, new TreeNode(2), new TreeNode(4))
    const nodeQ = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    const actualResult = isSameTree(nodeP, nodeQ)
    expect(actualResult).toBeFalsy()
  })
})