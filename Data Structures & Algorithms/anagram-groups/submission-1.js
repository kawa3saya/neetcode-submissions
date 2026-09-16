class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = new Map();

        for(let i=0; i<strs.length; i++){
            let strKey = strs[i].split('').sort().join("")
            if(result.has(strKey)){
                let newValues = [...result.get(strKey), strs[i]]
                result.set(strKey, newValues)
            }else{
                result.set(strKey, [strs[i]])
            }
        }
        return [...result.values()]
    }
}
