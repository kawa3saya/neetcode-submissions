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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // reverse the list
        let prev = null
        let cur = head
        while(cur){
            let temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        
        // reverse the list again
        cur = prev
        if(n===1){
            cur = cur.next
        }
        prev = null
        let i = 1
        // null->4→3->2->1
        while(cur){
            let temp = cur.next

            if(i+1 === n){
                temp = temp.next
            }
            cur.next = prev
            prev = cur
            cur = temp
            i ++   
        }
        return prev
    }
}
