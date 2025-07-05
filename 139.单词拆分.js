// @algorithm @lc id=139 lang=javascript 
// @title word-break
// @test("leetcode",["leet","code"])=true
// @test("applepenapple",["apple","pen"])=true
// @test("catsandog",["cats","dog","sand","and","cat"])=false
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 完全背包问题
 * ———————————————— 递归方案再次超时
 */
var wordBreak = function (s, wordDict) {
  const n = wordDict.length;
  const min = Math.min(...wordDict.map(word => word.length));
  if (min > s.length) return false;

  function dfs(restS) {
    if (restS === '') return true;
    for (let word of wordDict) {
      if(word.length > restS.length) continue;
      if (!restS.startsWith(word)) continue;
      const re = dfs(restS.slice(word.length));
      if (re) return true;
    }
    return false;
  }
  return dfs(s)
};