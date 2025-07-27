// @algorithm @lc id=230 lang=javascript 
// @title kth-smallest-element-in-a-bst
// @test([3,1,4,null,2],1)=1
// @test([5,3,6,2,4,null,null,1],3)=3
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
 * @return {number}
 * 中序遍历思路：第K 个元素就是 K 小
 */
var kthSmallest = function (root, k) {
  if (!root) return;
  let cur = root;
  const stack = [];
  while (stack.length > 0 || cur) {
    // 一直往左走，把路径上的节点压栈
    while (cur) {
      // 压入当前节点
      stack.push(cur);
      // 继续向左
      cur = cur.left
    }
    // 此时 cur 为 null，栈顶为最左的节点
    // 弹出最左节点（当前最小）
    cur = stack.pop();
    k--;
    if (k === 0) return cur.val;// 找到第k小
    cur = cur.right;
  }
};