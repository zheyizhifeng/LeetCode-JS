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
   */
  function isValid(root, min, max) {
    // 以root 为根的子树节点必须满足:
    // min.val < root.val < max.val
    // min: 右子树最小值
    // max: 左子树最大值
    if (!root) return true;
    // 先判断树根🌳，再判断子树
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;

    // 根树满足后，再判断左右子树
    return isValid(root.left, min, root) && isValid(root.right, root, max);
  }
  return isValid(root, null, null);
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
