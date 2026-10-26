/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

        // define function recur
        function search(node){
            // in the recur, swap left & right

            let prevLeft = node.left || null
            let prevRight = node.right || null
            node.left = prevRight
            node.right = prevLeft
            if(node.left !== null){
                search(node.left)
            }
            if(node.right !== null){
                search(node.right)
            }
        }
        
        if(root !== null){
            search(root)
        }
        return root
    }
}
