/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lastChar = ''
    let title = ''

    while(columnNumber){
        
        lastChar = alphabet[(columnNumber - 1) % 26]
        
        // Every 1 complete iteration, there is a new letter or an upgrade of the previous one
        // The number of iterations points to the letter in the alphabet
        //  0 iteration(s) => A  1
        //  1 iteration(s) => AA 27
        //  2 iteration(s) => BA 53
        //  3 iteration(s) => CA 79
        //  4 iteration(s) => DA 105
        // ...
        // 26 iteration(s) => ZA 677
        columnNumber = Math.floor((columnNumber - 1) / 26)
        
        title = lastChar + title
        
    }
    
    return title
    
}