/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    if(!p && !q) return true
    if(!p || !q) return false
    
    let arr_1 = getNodes(p, 'origin')
    let arr_2 = getNodes(q, 'origin')
    
    function getNodes(start, direction){
        
        var left  = []
        var right = []
        
        if(start.left)
            left = getNodes(start.left, 'left')
                
        if(start.right)
            right = getNodes(start.right, 'right')

        return [...left, start.val + direction, ...right]
        
    }
        
    return arr_1.length === arr_2.length && arr_1.every((_, i) => arr_1[i] === arr_2[i])
    
}