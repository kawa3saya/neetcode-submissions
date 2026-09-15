class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map;
        const sArr = s.replace();
        const tArr = t.replace();
        if(sArr.length !== tArr.length) return false
        for(let i=0; i<sArr.length; i++){
            if(sMap.has(sArr[i])){
                let num = sMap.get(sArr[i])
                num += 1
                sMap.set(sArr[i], num);
            }else{
                sMap.set(sArr[i], 1);
            }
        }
        for(let i=0; i<tArr.length; i++){
            if(sMap.has(tArr[i]) && sMap.get(tArr[i]) > 0){
                let num = sMap.get(tArr[i])
                num -= 1
                sMap.set(tArr[i], num)
            }else{
                return false
            }
        }

        return true
    }
}
