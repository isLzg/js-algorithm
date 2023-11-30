// 使用了 BFS，即广度优先算法，使用了 队列 的思想 


import TreeNode from "./base";

export default function levelOrder(root: TreeNode) {
  if (!root) return null
  const resultArray: number[][] = []
  const queue = [root]
  let level = 0

  while (queue.length) {
    let size = queue.length;

    // 每一层初始化一个空数组
    resultArray.push([]);
    while (size--) {
      let node = queue.shift();

      // 每一层的节点都存着
      if (node?.value) {
        resultArray[level].push(node.value);
      }
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }

    // 迭代层次
    ++level
  }

  return resultArray
}

const testTree = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)))

levelOrder(testTree)