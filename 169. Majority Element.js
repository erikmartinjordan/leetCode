/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let elems = {}
    let max = nums[0]
    
    nums.forEach(num => {
        
        elems[num] = ++elems[num] || 1
                
        if(elems[num] > elems[max])
            max = num
        
    })
        
    return max
    
}