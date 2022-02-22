/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let elem = {}
    
    for(let i = 0; i < nums.length; i ++){
        
        if(elem[nums[i]])
            return true
        
        elem[nums[i]] = true
        
    }
    
    return false
    
}