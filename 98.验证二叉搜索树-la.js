/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30201
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  /**
   * 二叉搜索树🌳不是只有当前根节点和左右节点比较，而是和整个左右子树比较，所以需要辅助的 min、max
   * root.val 比如处于(min, max) 才算合法
   */
    function isValid(root, min, max) {
       if (!root) return true;
       if (root.val <= min) return false;
       if (root.val >= max) return false;

       return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    }
    return isValid(root, -Infinity, Infinity)
};
// @lc code=end

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */
