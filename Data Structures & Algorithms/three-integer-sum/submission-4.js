class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // create Map to count how many times the number appear
        const numMap = new Map()
        for (let i=0; i<nums.length; i++){
            if(numMap.has(nums[i])){
                let count = numMap.get(nums[i]) + 1
                numMap.set(nums[i], count)
            }else{
                numMap.set(nums[i], 1)
            }
        }
        console.log(numMap)

        // order the keys by asc (-4, -1, 0, 1, 2)
        let keys = numMap.keys()
        keys = [...keys].sort((a,b) => a - b )
        console.log(keys)

        // loop the keys
        let res = []
        for(let i =0; i<keys.length; i++){
            let first = keys[i]
            // could have the same number, so start from i = j
            for (let j=i; j<keys.length; j++){
                let second = keys[j]

                let third = - first - second
                if(!numMap.has(third)){
                    continue
                }
                if(third < second){
                    continue
                }
                if(first === second && second === third){
                    if(numMap.get(second)<3) continue
                }else if(first === second || second === third){
                    if(numMap.get(second)<2) continue
                }
            res.push([first, second, third])
            }
        }
        return res

    }
}
