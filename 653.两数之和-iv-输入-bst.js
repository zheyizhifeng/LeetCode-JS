/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 转为中序遍历的result数组
  if (!root || !(root.left || root.right)) return false;
  const result = [];
  const stack = [];
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      let node = stack.pop();
      result.push(node.val);
      root = node.right;
    }
  }
  let l = 0,
    r = result.length - 1;
  while (l < r) {
    sum = result[l] + result[r];
    if (sum < k) {
      l++;
    } else if (sum > k) {
      r--;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
