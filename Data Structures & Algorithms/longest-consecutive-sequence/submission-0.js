class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sequence = new Set(nums)
        let curLongest = 0
        for (const num of sequence){
            if(!sequence.has(num-1)){
                let current = num
                let length = 1

                while(sequence.has(current+1)){
                    length ++
                    current ++
                }
                if(length > curLongest){
                    curLongest = length
                }
            }
        }
        return curLongest
    }
}
