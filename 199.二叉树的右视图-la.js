/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30202
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [[root, 0]];
  while (stack.length > 0) {
    const [node, level] = stack.shift();
    result[level] = node.val;
    if (node.left) {
      stack.push([node.left, level + 1])
    }
    if (node.right) {
      stack.push([node.right, level + 1])
    }
  }
  return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,null,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
