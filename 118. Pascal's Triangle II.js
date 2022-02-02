/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    const sum = (rowIndex, row, arr, res) => {
        
        let out = new Array(row + 1).fill(1)
     
        for(let j = 1; j < out.length - 1; j ++){
                
            out[j] = arr[j - 1] + arr[j] 
                
        }
                        
        if(rowIndex !== row){
                                    
            res = sum(rowIndex, row + 1, out, null)
            
        }
        else{
            
            res = out
                        
        }
        
        return res
        
    }
    
    return sum(rowIndex, 0, [], null)
    
}