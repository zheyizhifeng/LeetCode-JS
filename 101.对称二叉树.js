/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/* var isSymmetric = function (root) {
  if (!root) return true;
  function compare(leftRoot, rightRoot) {
    if (!leftRoot && !rightRoot) return true;
    else if (!leftRoot || !rightRoot) return false;
    else {
      // leftRoot && rightRoot
      return (
        leftRoot.val === rightRoot.val &&
        compare(leftRoot.left, rightRoot.right) &&
        compare(leftRoot.right, rightRoot.left)
      );
    }
  }
  return compare(root.left, root.right);
}; */

var isSymmetric = function (root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  while (queue.length > 0) {
    const leftRoot = queue.shift();
    const rightRoot = queue.shift();
    if (!leftRoot && !rightRoot) continue;
    if (!leftRoot || !rightRoot || leftRoot.val !== rightRoot.val) return false;
    queue.push(leftRoot.left);
    queue.push(rightRoot.right);
    queue.push(leftRoot.right);
    queue.push(rightRoot.left);
  }
  return true;
};
// @lc code=end
