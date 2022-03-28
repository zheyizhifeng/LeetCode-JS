/*
 * @lc app=leetcode.cn id=745 lang=javascript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 */
function TrieNode() {
  this.next = new Map();
  this.weight = 0;
}
function Trie() {
  this.root = new TrieNode();
}
Trie.prototype.insert = function (word, weight) {
  if (!word) return;
  let node = this.root;
  for (let c of word) {
    if (!node.next.has(c)) {
      node.next.set(c, new TrieNode());
    }
    node = node.next.get(c);
    node.weight = weight;
  }
};
var WordFilter = function (words) {
  /**
   * HashMap暴力遍历，根据题意不超过10*10*15000 = 150W
   */
  /* this.map = new Map();
  for (let i = 0; i < words.length; i++) {
    let prefix = '';
    for (let j = 0; j <= words[i].length; j++) {
      let suffix = '';
      for (let k = 0; k <= words[i].length; k++) {
        suffix = words[i].slice(k);
        this.map.set(prefix + '#' + suffix, i);
      }
      prefix += words[i][j];
    }
  } */

  /**
   * Trie树
   */
  this.tree = new Trie();
  for (let weight = 0; weight < words.length; weight++) {
    let word = words[weight];
    let suffix = '';
    for (let i = word.length; i >= 0; i--) {
      suffix = word.slice(i, word.length);
      this.tree.insert(suffix + '#' + word, weight);
    }
  }
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  /**
   * 对应HasMap
   */
  /* let target = prefix + '#' + suffix;
  return this.map.has(target) ? this.map.get(target) : -1; */

  /**
   * 对应Trie树
   */
  let target = suffix + '#' + prefix;
  let node = this.tree.root;
  for (let c of target) {
    if (!node.next.has(c)) return -1;
    node = node.next.get(c);
  }
  // console.log('=> ', node.weight);
  return node.weight;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
var obj = new WordFilter(['apple', 'mango', 'mongo', 'alice', 'moongo']);
obj.f('m', 'go');
// obj.f('ab', 'abcaccbcaa');
// obj.f('a', 'aa');
// obj.f('cabaaba', 'abaaaa');
// obj.f('cacc', 'accbbcbab');
// obj.f('ccbcab', 'bac');
// obj.f('bac', 'cba');
// obj.f('ac', 'accabaccaa');
// obj.f('bcbb', 'aa');
// obj.f('ccbca', 'cbcababac');

// @lc code=end
