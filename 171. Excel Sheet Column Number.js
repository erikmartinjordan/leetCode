/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lastChar = columnTitle[columnTitle.length - 1]
    let columnNumber = alphabet.indexOf(lastChar) + 1

    for(var i = 1, iterations = 0; i < columnTitle.length; i ++){
        
        lastChar = columnTitle[columnTitle.length - (i + 1)]
        
        // AA   => 1   iteration(s)
        // BA   => 2   iteration(s)
        // AAA  => 27  iteration(s)
        // BAA  => 53  iteration(s)
        // CAA  => 79  iteration(s)
        // ZAA  => 677 iteration(s)
        // AAAA => 703 iteration(s)
        iterations += (alphabet.indexOf(lastChar) + 1) * (26 ** (i - 1)) 
                        
    }
        
    columnNumber += iterations * 26
    
    return columnNumber
    
}