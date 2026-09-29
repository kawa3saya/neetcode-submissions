class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = new Map()
        brackets.set(")","(").set("]","[").set("}","{")
        let stack = []

        for(let c of s){
            if(!brackets.get(c)){
                stack.push(c)
                continue
            }
            // close bracket -> check stacked last item is whether corresponding bracket
            if(stack[stack.length-1] === brackets.get(c)){
                stack.pop()
            }else{
                return false
            }
        }
        if(stack.length===0){
            return true
        }else{
            return false
        }
    }
}
