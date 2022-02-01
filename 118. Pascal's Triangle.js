/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    const sum = (numRows, arr, res) => {
        
        res = res || []
        
        if(arr.length < numRows){
            
            let out = new Array(arr.length + 1).fill(1)
            
            for(let j = 1; j < out.length - 1;j ++){
                
                out[j] = arr[j - 1] + arr[j]
                
            }
            
            res.push(out)
                                   
            sum(numRows, out, res)
            
        }

        return res
                
    }
    
    return sum(numRows, [], null)
    
}