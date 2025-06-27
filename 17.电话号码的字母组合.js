// @algorithm @lc id=17 lang=javascript
// @title letter-combinations-of-a-phone-number
// @test("23")=["ad","ae","af","bd","be","bf","cd","ce","cf"]
// @test("")=[]
// @test("2")=["a","b","c"]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];
  if (digits.length === 0) return [];
  /* 
    首先使用哈希表存储每个数字对应的所有可能的字母，然后进行回溯操作。

    回溯过程中维护一个字符串，表示已有的字母排列（如果未遍历完电话号码的所有数字，则已有的字母排列是不完整的）。该字符串初始为空。每次取电话号码的一位数字，从哈希表中获得该数字对应的所有可能的字母，并将其中的一个字母插入到已有的字母排列后面，然后继续处理电话号码的后一位数字，直到处理完电话号码中的所有数字，即得到一个完整的字母排列。然后进行回退操作，遍历其余的字母排列。

    回溯算法用于寻找所有的可行解，如果发现一个解不可行，则会舍弃不可行的解。在这道题中，由于每个数字对应的每个字母都可能进入字母组合，因此不存在不可行的解，直接穷举所有的解即可。

    作者：LeetCode-Solution
    链接：https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solution/dian-hua-hao-ma-de-zi-mu-zu-he-by-leetcode-solutio/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
  function backtrack(curStr, i) {
    // 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
    if (curStr.length === digits.length) {
      result.push(curStr);
    } else {
      const letters = map[digits[i]];
      for (let c of letters) {
        backtrack(curStr + c, i + 1);
      }
    }
  }
  backtrack('', 0);
  return result;
};

// letterCombinations('23')