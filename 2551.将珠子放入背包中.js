// @algorithm @lc id=2681 lang=javascript 
// @title put-marbles-in-bags
// @test([1,3,5,1],2)=4
// @test([1,3],2)=0
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 * 
提示 1
问题相当于把 weights 划分成 k 个连续子数组，分数等于每个子数组的两端的值之和。

提示 2
weights[0] 和 weights[n−1] 一定在分数中，最大分数和最小分数相减，抵消了。

上一个子数组的末尾和下一个子数组的开头一定同时在分数中。

提示 3
把所有 n−1 个 weights[i]+weights[i+1] 算出来，排序，
那么最大的 k−1 个数和最小的 k−1 个数相减，即为答案。

原因：
假设把数组分成 k 份，那么实际上，中间切了 k-1 刀，每个缝隙的最优两边的和都要加起来，
比如例 1 的 [1],[3,5,1],【1],[3】这个缝隙，1 和 3 都要加起来

实际上头尾两个数是不变的，最大-最小，可以抵消掉头尾两个数，所以可以忽略
那么问题就变成了，求 k-1 个缝隙左右两侧和选取 k-1 对的最大最小值
排序，然后取头尾的k-1个数即可，最大的减最小的即可求得结果

 */
var putMarbles = function(weights, k) {
    const n = weights.length;
    for(let i=0;i<n-1;i++) {
        weights[i] += weights[i+1];
    }
    weights.pop(); // 去掉最后一个
    weights.sort((a,b)=>a-b);

    let ans = 0;
    for(let i=0;i<k-1;i++) {
        ans += weights[weights.length - 1 - i] - weights[i];
    }
    return ans;
};