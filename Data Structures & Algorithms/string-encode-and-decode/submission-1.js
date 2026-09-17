class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode_string = ""
        for(let i=0; i<strs.length; i++){
            encode_string = encode_string + strs[i].slice("").length + "#" + strs[i]
        }
        return encode_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 5,#,H,E,L,L,O 
    // 0,1,2,3,4,5,6
    decode(str) {
        const result = []
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            // j is position of "#"
            const length = Number(str.slice(i,j))
            let start = j+1
            let end = start + length
            result.push(str.slice(start, end))
            i = end
        }
        return result
    }
}
