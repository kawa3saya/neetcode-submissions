class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (numMap.has(nums[i])) {
                let count = numMap.get(nums[i]) + 1;
                numMap.set(nums[i], count);
            } else {
                numMap.set(nums[i], 1);
            }
        }
        const sortedArr = [...numMap].sort((a, b) => {
            return b[1] - a[1];
        });
        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(sortedArr[i][0]);
        }
        return res;
    }
}
