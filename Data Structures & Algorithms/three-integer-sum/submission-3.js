class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (numMap.has(nums[i])) {
                let count = numMap.get(nums[i]);
                numMap.set(nums[i], count + 1);
            } else {
                numMap.set(nums[i], 1);
            }
        }

        const numKeys = numMap.keys();
        const sortedKeys = [...numKeys].sort((a, b) => b - a);

        let result = [];
        for (let i = 0; i < sortedKeys.length; i++) {
            let first = sortedKeys[i];

            for (let j = i; j < sortedKeys.length; j++) {
                let second = sortedKeys[j];
                let third = -first - second;
                

                if (!numMap.has(third)) {
                    continue;
                }
                if (third > second) {
                    continue;
                }
                if (first == second && second == third) {
                    if (numMap.get(first) < 3) {
                        continue;
                    }
                } else if (first == second || second == third) {
                    if (numMap.get(second) < 2) {
                        continue;
                    }
                }
                result.push([first, second, third]);
            }
        }
        return result
    }
}
