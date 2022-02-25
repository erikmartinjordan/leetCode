/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let letters = {}
    
    if(t.length > s.length)
        [s, t] = [t, s]
    
    s.split('').forEach(letter => {
        
        if(letters[letter])
            letters[letter] ++
        else
            letters[letter] = 1  
    
    })
    
    
    t.split('').forEach(letter => {
        
        if(letters[letter] > 0)
            letters[letter] --
        if(letters[letter] === 0)
            delete letters[letter]
        
    })
        
    return Object.keys(letters).length === 0
    
}