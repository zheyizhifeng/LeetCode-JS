/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30101
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 迭代方案
 */
var spiralOrder = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];
    //   定义四个边界
    let r1 = 0, r2 = m - 1;
    let c1 = 0, c2 = n - 1;
    while (r1 <= r2 && c1 <= c2) {
        /**
         * 四个方向遍历
         */
        // 左到右
        for (let i = c1; i <= c2; i++) {
            result.push(matrix[r1][i]);
        }
        // 上到下
        for (let i = r1 + 1; i <= r2; i++) {
            result.push(matrix[i][c2]);
        }
        if (r1 < r2 && c1 < c2) {
            // 右到左
            for (let i = c2 - 1; i > c1; i--) {
                result.push(matrix[r2][i]);
            }
            // 下到上
            for (let i = r2; i > r1; i--) {
                result.push(matrix[i][c1]);
            }
        }
        // 缩小边界
        r1++;
        r2--;
        c1++;
        c2--;
    }
    // console.log(result);

    return result;
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */
