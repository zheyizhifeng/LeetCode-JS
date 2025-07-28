/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30202
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 以下方案效率不高，而且多了返回值
 */
var flatten = function (root) {
  if (!root) return root;
  if (!root.left && !root.right) return root;
  const dummy = root;
  // 提前保存左右子树结构，防止覆盖丢失
  let leftTree = root.left;
  let rightTree = root.right;

  // 链表结构下，left 都是 null
  root.left = null;
  // 链表化左子树, 并拼接
  root.right = flatten(leftTree);
  // 遍历链表，找到拼接右子树的拼接点，也就是，当前链表的最后节点
  while (root.right) {
    root = root.right;
  }
  // 链表化右子树，并拼接
  root.right = flatten(rightTree)
  return dummy;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
