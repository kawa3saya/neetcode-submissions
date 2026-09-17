class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let multiplied = 1
        let zeroCount = 0
        let result = [];

        for(let i=0; i<nums.length; i++){
            if(nums[i] !== 0){
                multiplied *= nums[i]
            }else{
                zeroCount ++;
            }
        }
        
        for(let i=0; i<nums.length; i++){

            if(zeroCount >= 2){
                result.push(0)
            }else if(zeroCount === 1 && nums[i]===0){
                result.push(multiplied)
            }else if(zeroCount === 1 && nums[i]!==0){
                result.push(0)
            }else {
                let res = multiplied / nums[i]
                result.push(res)
            }
        }
        return result
    }
}
