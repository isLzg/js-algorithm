export default class ThreeNode {
  value: number
  left: ThreeNode | null
  right: ThreeNode | null

  constructor(value?: number, left?: ThreeNode, right?: ThreeNode) {
    this.value = value === undefined ? 0 : value
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}