class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const blacketMap = new Map();
        blacketMap.set(")", "(").set("]", "[").set("}", "{");

        for (let c of s) {
            if (!blacketMap.get(c)) {
                stack.push(c)
            } else if (blacketMap.get(c) === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
        
        if(stack.length > 0){
            return false
        }else{
            return true
        }
    }
}
