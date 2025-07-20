/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30201
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(let str of strs) {
      const array = str.split('');
      array.sort();
      const key = array.join();
      if (map.has(key)) {
        map.set(key, map.get(key).concat(str))
      } else {
        map.set(key, [str]);
      }
    }
    return [...map.values()]
};
// @lc code=end



/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
