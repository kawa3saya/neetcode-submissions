class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = new Map();
        for(let i=0; i<nums.length; i++){
            let expectedNum = target - nums[i];
            if(res.has(expectedNum)){
                return [res.get(expectedNum), i];
            }else{
                res.set(nums[i], i);
            }
        }
        return false;
    }
}
