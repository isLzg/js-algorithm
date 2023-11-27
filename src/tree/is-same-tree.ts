import ThreeNode from "./base";

const dfs = (nodeP: ThreeNode, nodeQ: ThreeNode): boolean => {
  if (nodeP === null && nodeQ === null) return true
  else if (nodeP === null || nodeQ === null) return false
  else if (nodeP.value !== nodeQ.value) return false
  return dfs(nodeP.left!, nodeQ.left!) && dfs(nodeP.right!, nodeQ.right!)
}

export default function isSameTree(nodeP: ThreeNode, nodeQ: ThreeNode) {
  return dfs(nodeP, nodeQ)
}