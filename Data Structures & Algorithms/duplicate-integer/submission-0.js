class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numMap = new Map();
        for(let i = 0; i<nums.length; i++){
            if(numMap.has(nums[i])){
                return true;
            }else{
                numMap.set(nums[i], 1);
            }
        }
        return false;
    }
}
