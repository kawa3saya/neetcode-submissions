class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestIndex = -1
        let highestIndex = -1
        let profit = 0
        // 1 loop
        // lowestIndex < highestIndex && bigger profit 
        for(let i=0; i<prices.length; i++){
            if(lowestIndex < 0){
                lowestIndex = i
            }
            if(highestIndex < 0){
                highestIndex = i
            }

            if(prices[i] < prices[lowestIndex]){
                lowestIndex = i
                highestIndex = i
            }

            if(prices[i] > prices[highestIndex]){
                highestIndex = i
                if(prices[highestIndex] - prices[lowestIndex] > profit){
                    profit = prices[highestIndex] - prices[lowestIndex]
                }
            }

        }
        return profit
    }
}
