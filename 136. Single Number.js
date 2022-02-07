/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let obj = {}
    
    nums.forEach(num => {
        
        if(!obj[num]){
            
            obj[num] = 1
            return  
            
        }
        
        delete obj[num]
        
    })
    
    return Object.keys(obj)[0]
    
}