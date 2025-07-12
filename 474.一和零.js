// @algorithm @lc id=474 lang=javascript 
// @title ones-and-zeroes
// @test(["10","0001","111001","1","0"],5,3)=4
// @test(["10","0","1"],1,1)=2
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const memo = new Map(); // 记忆化缓存：key为"i,remainM,remainN"，value为最大数量

  // 递归函数：返回从i开始选，剩余m个0和n个1时能选的最大数量
  const dfs = (i, remainM, remainN) => {
    if (i === strs.length) return 0; // 处理完所有字符串，返回0
    const key = `${i},${remainM},${remainN}`;
    if (memo.has(key)) return memo.get(key); // 缓存命中，直接返回

    const [zero, one] = get0And1(strs[i]);
    // 情况1：不选当前字符串，直接处理i+1
    let max = dfs(i + 1, remainM, remainN);

    // 情况2：选当前字符串（如果资源足够）
    if (zero <= remainM && one <= remainN) {
      max = Math.max(max, 1 + dfs(i + 1, remainM - zero, remainN - one));
    }

    memo.set(key, max); // 缓存结果
    return max;
  };

  return dfs(0, m, n);
};

function get0And1(str) {
  let zero = 0, one = 0;
  for (const c of str) {
    if (c === '0') zero++;
    else one++;
  }
  return [zero, one];
}