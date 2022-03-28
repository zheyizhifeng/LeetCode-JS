/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
/* var countAndSay = function (n) {
  const dp = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      dp[i] = "1";
    } else if (i === 2) {
      dp[i] = "11";
    } else {
      let result = "";
      const str = dp[i - 1];
      let start = (end = 0);
      for (let j = 0; j < str.length - 1; j++) {
        if (str[j] === str[j + 1]) {
          end++;
        } else {
          result += end - start + 1 + str[j];
          start = end = j + 1;
        }
      }
      result += end - start + 1 + str[end];

      dp[i] = result;
    }
  }
  return dp[n];
}; */

// 正则表达式
var countAndSay = function (n) {
  let prev = '1';
  for (let i = 2; i <= n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => {
      return `${item.length}${item[0]}`;
    });
  }
  return prev;
};
// @lc code=end
