import TreeNode from "./base";

const dfs = (nodeP: TreeNode, nodeQ: TreeNode): boolean => {
  if (nodeP === null && nodeQ === null) return true
  else if (nodeP === null || nodeQ === null) return false
  else if (nodeP.value !== nodeQ.value) return false
  return dfs(nodeP.left!, nodeQ.left!) && dfs(nodeP.right!, nodeQ.right!)
}

export default function isSameTree(nodeP: TreeNode, nodeQ: TreeNode) {
  return dfs(nodeP, nodeQ)
}