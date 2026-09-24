class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0
        let strSet = new Set() 
        let l = 0

        for(let r=0; r<s.length;r++){
            while(strSet.has(s[r])){
                strSet.delete(s[l])
                l ++
            }
            strSet.add(s[r])
            result = Math.max(result, r - l + 1)
            
        }
        return result
    }
}
