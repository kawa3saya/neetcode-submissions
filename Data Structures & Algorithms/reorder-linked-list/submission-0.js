/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let cur = head;
        while (cur && cur.next && cur.next.next) {
            let beforeLast = cur;

            // take the second last
            while (beforeLast.next && beforeLast.next.next) {
                beforeLast = beforeLast.next;
            }
            let last = beforeLast.next
            let temp = cur.next
            cur.next = last
            beforeLast.next = null
            last.next = temp
            cur = temp
        }
        // while(from the head → the end of node)
        // if(find the last node) link head to the last
        // retursn the head
    }
}
