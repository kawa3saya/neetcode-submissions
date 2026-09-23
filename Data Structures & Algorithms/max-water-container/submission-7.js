class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // create Map 
        // {x: y}
        const numMap = new Map()


        for(let i=0; i<heights.length; i++){
            let key = i+1
            numMap.set(key, heights[i])
        }
        let keys = numMap.keys()
        keys = [...keys]
        //1 loop(while)
        let i = heights.length - 1
        let j = 0
        let res = 0


        while(i>j){
            let w = i-j
            let h = 0
            let iHeight = numMap.get(keys[i])
            let jHeight = numMap.get(keys[j])
            if(iHeight>jHeight){
                h=jHeight
            }else{
                h=iHeight
            }

            if(w*h > res){
                res = w * h
            }

            if(jHeight < iHeight){
                j++
            }else{
                i--
            }
        }
        
        return res
    }
}
