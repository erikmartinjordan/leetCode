/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let op = {}
    let os = {}
    
    let ap = pattern.split('')
    let as = s.split(' ')
    
    if(ap.length !== as.length)
        return false
    
    for(let i = 0; i < as.length; i ++){
        
        if(!op[as[i]] && !os[ap[i]]){
            
            op[as[i]] = ap[i]
            os[ap[i]] = as[i]
            
        }
        else if(op[as[i]] !== ap[i] || os[ap[i]] !== as[i]){
            
            return false
            
        }
        
    }
    
    return true
    
}