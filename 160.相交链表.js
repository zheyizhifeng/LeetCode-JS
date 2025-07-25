/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 * 根据题目意思
如果两个链表相交，那么相交点之后的长度是相同的

我们需要做的事情是，让两个链表从同距离末尾同等距离的位置开始遍历。这个位置只能是较短链表的头结点位置。
为此，我们必须消除两个链表的长度差

指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
如果 pA 到了末尾，则 pA = headB 继续遍历
如果 pB 到了末尾，则 pB = headA 继续遍历
比较长的链表指针指向较短链表head时，长度差就消除了
如此，只需要将最短链表遍历两次即可找到位置
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB;
    while (p !== q) {
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return p;
};
// @lc code=end
