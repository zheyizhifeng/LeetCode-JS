/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var TrieNode = function () {
  this.isEnd = false;
  this.next = {};
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) return;
  let node = this.root;
  for (let c of word) {
    if (!node.next[c]) {
      node.next[c] = new TrieNode();
    }
    node = node.next[c];
  }
  node.isEnd = true;
  return;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) return false;
  let node = this.root;
  for (let c of word) {
    if (node.next[c]) {
      node = node.next[c];
    } else {
      return false;
    }
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return true;
  let node = this.root;
  for (let c of prefix) {
    if (node.next[c]) {
      node = node.next[c];
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
// const trie = new Trie();

// trie.insert('apple');
// trie.search('apple'); // 返回 true
// trie.search('app'); // 返回 false
// trie.startsWith('app'); // 返回 true
// trie.insert('xyz');
// trie.search('app');
