import ThreeNode from "./base";

const dfs = (left: ThreeNode | null, right: ThreeNode | null): boolean => {
  if (left === null && right === null) return true
  if (left === null || right === null) return false
  if (left.value !== right.value) return false

  // 注意接下来的递归对象，是「镜像子节点」
  return dfs(left.left, right.right) && dfs(left.right, right.left)
}

export default function isSymmetricTree(tree: ThreeNode): boolean {
  if (!tree) return true
  return dfs(tree.left, tree.right)
}