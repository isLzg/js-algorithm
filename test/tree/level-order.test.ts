import { describe, expect, it } from "bun:test";
import TreeNode from "../../src/tree/base";
import levelOrder from "../../src/tree/level-order";

describe("Level Order", () => {
  it("test 01", () => {
    const testTree = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)))

    const expectedResult = [[3], [9, 20], [15, 7]];
    const actualResult = levelOrder(testTree)
    expect(actualResult).toEqual(expectedResult)
  })
})