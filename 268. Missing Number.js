/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let arr = Array(nums.length + 1).fill('Not found')
        
    nums.forEach(elem => arr[elem] = 'Found')

    return arr.findIndex(num => num === 'Not found')
    
}