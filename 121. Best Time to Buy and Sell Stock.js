/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     
    let profit = []
    
    let min = 0
    let max = 0
    
    for(let i = 0; i < prices.length; i ++){
        
        profit[i] = prices[i] - prices[min]
                
        if(profit[i] > max)
            max = profit[i]
        
        if(prices[i] < prices[min])
            min = i

    }
    
    return max
    
}