/**
 * @param {number} n
 * @return {number[]}
    See the pattern here:
    
    0 --> 0     0   2^0
    1 --> 1     1

    2 --> 10    1   2^1 (Previous sequence plus 1)
    3 --> 11    2

    4 --> 100   1   2^2 (Previous sequence plus 1)
    5 --> 101   2
    6 --> 110   2
    7 --> 111   3

    8 --> 1000  1   2^3 (Previous sequence plus 1)
    9 --> 1001  2
    10 --> 1010 2
    11 --> 1011 3
    12 --> 1100 2
    13 --> 1101 3
    14 --> 1110 3
    15 --> 1111 4
 */
var countBits = function(n) {
    
    let ans = [0]
    
    for(let i = 1, j = 0; i <= n; i ++, j = Math.floor(Math.log(i)/Math.log(2))){
        
        ans[i] = ans[i - (2 ** j)] + 1 
        
    }
    
    return ans
    
}
  