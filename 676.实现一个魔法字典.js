/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function Node() {
  this.isEnd = false;
  this.next = new Map();
}
var MagicDictionary = function () {
  this.root = new Node();
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (let word of dictionary) {
    let node = this.root;
    for (let c of word) {
      if (!node.next.has(c)) {
        node.next.set(c, new Node());
      }
      node = node.next.get(c);
    }
    node.isEnd = true;
  }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  return dfs(this.root, searchWord, 0, 0);
};

function dfs(root, str, i, count) {
  if (count > 1) return false;
  if (i === str.length) return count === 1 && root.isEnd;
  for (let [char, node] of root.next) {
    let c = 0;
    if (char !== str[i]) c = 1;
    if (dfs(node, str, i + 1, count + c)) return true;
  }
  return false;
}
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

// let magicDictionary = new MagicDictionary();
// magicDictionary.buildDict(['hello', 'leetcode']);
// magicDictionary.search("hello"); // 返回 False
// magicDictionary.search("hhllo"); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
// magicDictionary.search("hell"); // 返回 False
// magicDictionary.search("leetcoded"); // 返回 False
