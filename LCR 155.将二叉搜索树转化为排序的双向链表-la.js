/*
 * @lc app=leetcode.cn id=LCR 155 lang=javascript
 * @lcpr version=30201
 *
 * [LCR 155] 将二叉搜索树转化为排序的双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  const list = [];

  function middleTraverse(node) {
    if (!node) return;
    middleTraverse(node.left);
    list.push(node);
    middleTraverse(node.right);
  }

  middleTraverse(root);

  const n = list.length;
  for (let i = 0; i < n; i++) {
    list[i].left = list[(i-1+n)%n];
    list[i].right = list[(i+1)%n];
  }
  return list[0];
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,5,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
