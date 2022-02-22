/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    if(!nums.length)
        return []
    
    let [min, max] = [nums[0], nums[0]]
    
    for(var i = 0, ranges = []; i < nums.length; i ++){
        
        if(nums[i] - max > 1){
            
            ranges.push(min === max ? `${min}` : `${min}->${max}`)
            
            ;[min, max] = [nums[i], nums[i]]
            
        }
        
        max = nums[i]
        
    }

    ranges.push(min === max ? `${min}` : `${min}->${max}`)
    
    return ranges
    
}