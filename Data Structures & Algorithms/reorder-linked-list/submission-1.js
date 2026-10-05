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
        let count = 0;
        let cur = head;
        while (cur) {
            count++;
            cur = cur.next;
        }

        count = Math.ceil(count / 2);
        let secondNode = head;
        let prev = head;
        while (count > 0) {
            prev = secondNode;
            secondNode = secondNode.next;
            count--;
        }
        prev.next = null;

        // reverse secondNode
        let previous = null;
        let current = secondNode;

        while (current) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        secondNode = previous;
        let headNext;
        let secondNext;

        while (secondNode) {
            headNext = head.next;
            secondNext = secondNode.next;

            head.next = secondNode;
            secondNode.next = headNext;

            head = headNext;
            secondNode = secondNext;
        }
    }
}
