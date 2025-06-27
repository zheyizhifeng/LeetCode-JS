// @algorithm @lc id=110 lang=javascript 
// @title balanced-binary-tree
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([3,9,20,null,null,15,7])=true
// @test([1,2,2,3,3,null,null,4,4])=false
// @test([])=true
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

/**
 * 思路是对二叉树做后序遍历，从底至顶返回子树深度，若判定某子树不是平衡树则 “剪枝” ，直接向上返回。
 * 自下而上的递归，先从小🌳开始递归，
 */
var isBalanced = function(root) {
  return getHeight(root) !== -1;
};

/**
 * 如何判断以当前传入节点为根节点的二叉树是否是平衡二叉树呢？当然是其左子树高度和其右子树高度的差值。

分别求出其左右子树的高度，然后如果差值小于等于1，则返回当前二叉树的高度，否则则返回-1，表示已经不是二叉平衡树了。

作者：代码随想录
链接：https://leetcode.cn/problems/balanced-binary-tree/solutions/866942/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-x3bv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function getHeight(node) {
    if (node === null) {
        return 0;
    }

    const leftH = getHeight(node.left);
    if (leftH === -1) {
        return -1; // 提前退出，不再递归
    }
    const rightH = getHeight(node.right);
    if (rightH === -1) {
      return -1;
    }

    if (Math.abs(leftH - rightH) > 1) {
        return -1;
    }
    return Math.max(leftH, rightH) + 1;
}