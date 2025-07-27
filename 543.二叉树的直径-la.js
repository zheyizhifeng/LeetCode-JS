/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30202
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0; // 记录最大直径（边数）

  // DFS函数：返回当前节点的子树高度（边数），并更新maxDiameter
  const dfs = (node) => {
    if (!node) return 0; // 空节点高度为0（无边）
    
    // 递归计算左右子树的高度（边数）
    const leftHeight = dfs(node.left); 
    const rightHeight = dfs(node.right);
    
    // 当前节点的直径 = 左子树高度 + 右子树高度（边数之和）
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
    
    // 当前节点的高度 = 左右子树高度的最大值 + 1（当前节点到子节点的边）
    return Math.max(leftHeight, rightHeight) + 1;
  };

  dfs(root); // 从根节点开始遍历
  return maxDiameter;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
