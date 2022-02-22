/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let a = {}
    let b = {}
    let u = ''
    
    for(let i = 0; i < s.length; i ++){
        
        a[s[i]] = a[s[i]] || t[i]
        b[t[i]] = b[t[i]] || s[i]
                        
        u += a[s[i]]
        
    }

    return Object.keys(a).length === Object.keys(b).length && u === t
    
}