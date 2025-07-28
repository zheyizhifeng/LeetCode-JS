/*
 * @lc app=leetcode.cn id=437 lang=javascript
 * @lcpr version=30202
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1); // 初始前缀和0出现1次（处理从根开始的路径）
  let currentSum = 0;
  let ret = 0;

  const dfs = (node) => {
    if (!node) return;

    // 1. 累加当前节点值到路径和
    currentSum += node.val;

    // 2. 查找是否存在历史前缀和等于 currentSum - targetSum
    const need = currentSum - targetSum;
    ret += prefixSumCount.get(need) || 0;

    // 3. 更新当前前缀和的计数（当前节点加入路径）
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

    // 4. 递归遍历左右子树
    dfs(node.left);
    dfs(node.right);

    // 5. 回溯：恢复前缀和计数和当前路径和（当前节点离开路径）
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) - 1);
    currentSum -= node.val; // 关键修复：恢复currentSum到父节点状态
  };

  dfs(root);
  return ret;
};
// @lc code=end



/*
// @lcpr case=start
// [10,5,-3,3,2,null,11,3,-2,null,1]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

 */
