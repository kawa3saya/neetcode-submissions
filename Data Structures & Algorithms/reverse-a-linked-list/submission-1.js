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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let isValid = head ? true : false

        while(isValid){
            let temp = head.next
            head.next = prev
           
            prev = head
            head = temp
            if(!head){
                isValid = false
            }
        }
        return prev
    }
}
