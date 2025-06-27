/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30201
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * 思路：找到每个节点当前的深度，从 0 开始
   */
  if (!root) return [];
  const result = [];
  function traverse(root, level) {
    if (!root) return;
    if (!result[level]) {
      result[level] = [root.val];
    } else {
      result[level].push(root.val);
    }
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  }
  traverse(root, 0);
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
