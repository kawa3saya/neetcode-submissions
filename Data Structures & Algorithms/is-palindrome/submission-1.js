class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("")
        let last = arr.length -1
        let start = 0
        while(start < last){
            if(arr[start] === arr[last]){
                start ++
                last --
            }else{
                return false
            }
        }
        return true
    }
}
