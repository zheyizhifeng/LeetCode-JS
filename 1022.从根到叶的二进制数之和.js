/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
var sumRootToLeaf = function (root) {
  if (!root) return 0;
  // if (!root.left && !root.right) return root.val
  let sum = 0;
  function backtrack(path = '', node) {
    if (!node.left && !node.right) {
      path += node.val;
      sum += parseInt(path, 2);
      // sum += path.concat(node.val).reduce((a, b) => (a << 1) + b);
    } else {
      path += node.val;
      // path.push(node.val)
      node.left && backtrack(path, node.left);
      node.right && backtrack(path, node.right);
      // path.pop()
    }
  }
  backtrack('', root);
  return sum;
};

// let root = new TreeNode(
//   1,
//   new TreeNode(0, new TreeNode(0), new TreeNode(1)),
//   new TreeNode(1, new TreeNode(0), new TreeNode(1))
// );
// sumRootToLeaf(root);
// @lc code=end
