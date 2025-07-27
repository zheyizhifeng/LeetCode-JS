/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30202
 *
 * [230] 二叉搜索树中第 K 小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 计算左子树节点数量，逐步和K 比较
 */
var kthSmallest = function(root, k) {
  if (!root) return;
  const left = getNodesCount(root.left);
  if (k === left + 1) {
    return root.val
  } else if (k < left + 1) {
    return kthSmallest(root.left, k);
  } else {
    return kthSmallest(root.right, k - (left + 1));
  }
};

// 计算当前 root 的所有节点数
function getNodesCount(root) {
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while(queue.length) {
    const node = queue.shift();
    if (node) {
      count++;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return count;
}
// @lc code=end



/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */
