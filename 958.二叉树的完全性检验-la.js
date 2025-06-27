/*
 * @lc app=leetcode.cn id=958 lang=javascript
 * @lcpr version=30201
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  /**
   * 层序遍历解决，关键思想是：如果遍历到了一个非空节点【null】之前 已经遍历过空节点，那么为false，否则遍历完毕返回true，
   * 依据：完全二叉树的最后一个节点才会出现 null
   */
  if (!root || (!root.left && !root.right)) return true;
  let hasNullNode = false;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      hasNullNode = true;
    } else {
      if (hasNullNode) return false;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
};
// const root = new TreeNode(1);
// console.log('root 是完全二叉树？', isCompleteTree(root)); // 应该返回 true
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,7]\n
// @lcpr case=end

 */
