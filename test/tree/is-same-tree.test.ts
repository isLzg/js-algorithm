import { describe, expect, it } from "bun:test";
import ThreeNode from "../../src/tree/base";
import isSameTree from "../../src/tree/is-same-tree";

describe("Is Same Three", () => {
  it("test 01", () => {
    const nodeP = new ThreeNode(1, new ThreeNode(2), new ThreeNode(3))
    const nodeQ = new ThreeNode(1, new ThreeNode(2), new ThreeNode(3))

    const actualResult = isSameTree(nodeP, nodeQ)
    expect(actualResult).toBeTruthy()
  })

  it("test 02", () => {
    const nodeP = new ThreeNode(1, new ThreeNode(2), new ThreeNode(4))
    const nodeQ = new ThreeNode(1, new ThreeNode(2), new ThreeNode(3))

    const actualResult = isSameTree(nodeP, nodeQ)
    expect(actualResult).toBeFalsy()
  })
})