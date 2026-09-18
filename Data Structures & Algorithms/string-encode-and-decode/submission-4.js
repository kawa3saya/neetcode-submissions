class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let i = 0; i<strs.length; i++){
            res = res + strs[i].length + "#" + strs[i]
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    decode(str) {
        let result = []
        let i = 0
        while(i < str.length){
            let j = i+1
            while(str[j] !== "#"){
                j++
            }
            let start = j + 1
            let length = Number(str.slice(i, j))
            let end = start + length
            result.push(str.slice(start, end))
            i = end
            
        }
        return result
        
    }
}
