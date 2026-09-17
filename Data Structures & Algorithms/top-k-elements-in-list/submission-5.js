class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();
        for(let i=0; i<nums.length; i++){
            let count = numMap.get(nums[i]) + 1
            if(numMap.has(nums[i])){
                numMap.set(nums[i], count)
            }else{
                numMap.set(nums[i], 1)
            }
        }
        const res = [...numMap].sort((a,b)=>{
            return b[1] - a[1]
        })
        const arr = res.slice(0,k);
        const result = arr.map(r=>r[0])
        return result;  
    }
}
