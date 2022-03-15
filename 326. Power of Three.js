/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {

    if(n <= 0) return false

    Math.log3 = (n) => Math.log(n)/Math.log(3)

    return (3 ** Math.floor(Math.log3(n)) === n) || (3 ** Math.ceil(Math.log3(n)) === n)
    
}