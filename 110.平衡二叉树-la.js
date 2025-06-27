/*
 * @lc app=leetcode.cn id=110 lang=javascript
 * @lcpr version=30201
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
/**
 * 自顶向下的递归
 */
var isBalanced = function(root) {
    if (!root) return true;
    let depthOfLeft = getDepth(root.left);
    let depthOfRight = getDepth(root.right);
    if (Math.abs(depthOfLeft-depthOfRight) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};
function getDepth(root) {
  if (!root) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,null,null,4,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
