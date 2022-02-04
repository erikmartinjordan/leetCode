/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let forward = s
        .toLowerCase()
        .split('')
        .filter(char => !char.match(/^[^a-z0-9]+$/))
        .join('')
    
    let backward = s
        .toLowerCase()
        .split('')
        .filter(char => !char.match(/^[^a-z0-9]+$/))
        .reverse()
        .join('')
    
    return forward === '' || forward === backward
    
}