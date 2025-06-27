// @algorithm @lc id=141 lang=javascript 
// @title linked-list-cycle
import * as a from 'algm'
import { ListNode } from 'algm'
// @test([3,2,0,-4],1)=true
// @test([1,2],0)=true
// @test([1],-1)=false
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const set = new Set();
    let cur = head;
    while(cur) {
        if (set.has(cur)) return true;
        set.add(cur);
        cur = cur.next;
    }
    return false;
};