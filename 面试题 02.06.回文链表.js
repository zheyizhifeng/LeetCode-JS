// @algorithm @lc id=100164 lang=javascript
// @title palindrome-linked-list-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([-129,-129])=true
// @test([1,0,0])=false
// @test([1,2])=false
// @test([1,2,2,1])=true
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let s = [];
  while (current) {
    s.push(current.val)
    current = current.next;
  }
  // s => [1,2,3,2,1]
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if(s[i] !== s[s.length - 1 - i]) return false
  }
  return true;
};
