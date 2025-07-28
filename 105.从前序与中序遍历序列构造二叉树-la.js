/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30201
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

const { TreeNode } = require('algm');

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 预存中序数组的值到索引的映射
  const inMap = new Map();
  inorder.forEach((val, idx) => inMap.set(val, idx));

  // 递归函数（增加参数限制遍历范围）
  const helper = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) return null;
    // 前序首元素是当前根
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    // 中序中根的位置
    const rootIdx = inMap.get(rootVal);
    // 左子树大小 = 中序根左侧元素个数
    const leftSize = rootIdx - inStart;

    // 分割前序：左子树 [preStart+1, preStart+leftSize]，右子树 [preStart+leftSize+1, preEnd]
    root.left = helper(preStart + 1, preStart + leftSize, inStart, rootIdx - 1);
    root.right = helper(preStart + leftSize + 1, preEnd, rootIdx + 1, inEnd);
    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */
