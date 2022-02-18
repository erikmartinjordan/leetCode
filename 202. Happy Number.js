/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const looped = {}
    
    while(true){
        
        let digits = n
            .toString()
            .split('')
            .map(e => parseInt(e))
        
        let square = digits
            .reduce((acc, elem) => acc + elem ** 2, 0)
        
        if(square === 1)
            return true
        
        if(looped[square])
            return false
        
        n = square
        looped[square] = true
      
    }
    
}