// @algorithm @lc id=2366 lang=javascript 
// @title maximum-bags-with-full-capacity-of-rocks
// @test([2,3,4,5],[1,2,4,4],2)=3
// @test([10,2,2],[2,2,0],100)=3
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
    const diff = capacity.map((item, index) => item - rocks[index]);
    // 找到差值数组, 升序排序
    diff.sort((a, b) => a - b);
    let max = 0;
    // console.log('diff >>> ', diff);
    
    for (let n of diff) {
        if (n === 0) {
            max++;
            continue;
        }
        if (additionalRocks < n) {
            // 石头少，装不满,
            return max;
        } else if (additionalRocks === n) {
            // 刚好装满一个
            return max + 1;
        } else {
            max++;
            additionalRocks -= n;
        }
    }
    return max;
};