/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map();
  for (let domain of cpdomains) {
    const [frequency, str] = domain.split(' ');
    const domainArr = str.split('.');
    for (let i = 0; i < domainArr.length; i++) {
      const domainStr = domainArr.slice(i).join('.');
      if (map.has(domainStr)) {
        map.set(domainStr, map.get(domainStr) + parseInt(frequency));
      } else {
        map.set(domainStr, parseInt(frequency));
      }
    }
  }
  const result = [];
  for (let [domain, fre] of map) {
    result.push([fre, domain].join(' '));
  }
  return result;
};
// @lc code=end
