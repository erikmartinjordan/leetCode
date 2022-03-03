/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let [min, max] = [1, n]
        
        while(max - min > 1){
            
            let version = Math.floor((min + max) / 2)
            
            if(isBadVersion(version)){
                
                max = version
                
            }
            else{
                
                min = version
                
            }
            
        }
            
        return isBadVersion(min) ? min : max
        
    }
    
}