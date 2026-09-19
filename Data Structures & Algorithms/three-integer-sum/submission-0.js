class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const numMap = new Map()

        // 数字の出現回数を数える
        for (const num of nums) {
            if (numMap.has(num)) {
                numMap.set(num, numMap.get(num) + 1)
            } else {
                numMap.set(num, 1)
            }
        }

        // 小さい順に並べる
        const numKeys = [...numMap.keys()].sort((a, b) => a - b)

        const result = []

        for (let i = 0; i < numKeys.length; i++) {
            const first = numKeys[i]

            for (let j = i; j < numKeys.length; j++) {
                const second = numKeys[j]

                const third = -first - second

                // first <= second <= third にする
                if (third < second) {
                    continue
                }

                // thirdが存在しない
                if (!numMap.has(third)) {
                    continue
                }

                // 同じ数字を必要な個数使えるか確認
                if (first === second && second === third) {
                    if (numMap.get(first) < 3) {
                        continue
                    }
                } else if (first === second) {
                    if (numMap.get(first) < 2) {
                        continue
                    }
                } else if (second === third) {
                    if (numMap.get(second) < 2) {
                        continue
                    }
                }

                result.push([first, second, third])
            }
        }

        return result
    }
}