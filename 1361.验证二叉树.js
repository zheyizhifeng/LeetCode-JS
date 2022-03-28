/*
 * @lc app=leetcode.cn id=1361 lang=javascript
 *
 * [1361] 验证二叉树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  // 二叉树中只有根节点入度为0, 其他入度都为1 && 解决循环情况
  const indegree = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const left = leftChild[i];
    const right = rightChild[i];
    if (left !== -1) {
      indegree[left]++;
      if (indegree[left] > 1) return false;
    }
    if (right !== -1) {
      indegree[right]++;
      if (indegree[right] > 1) return false;
    }
  }

  if (indegree.filter((d) => d === 0).length !== 1) return false;
  if (indegree.filter((d) => d === 1).length !== n - 1) return false;

  const rootIndex = indegree.indexOf(0);
  let countNodes = 0;
  const rootNode = [rootIndex];
  while (rootNode.length > 0) {
    const node = rootNode.pop();
    countNodes++;
    if (leftChild[node] !== -1) {
      rootNode.push(leftChild[node]);
    }
    if (rightChild[node] !== -1) {
      rootNode.push(rightChild[node]);
    }
  }

  return countNodes === n;
};

// @lc code=end
