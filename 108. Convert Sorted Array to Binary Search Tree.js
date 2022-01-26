/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
        
    const redoTree = (array, tree) => {
                
        if(array.length > 0){
            
            let middle = Math.floor(array.length/2)
                    
            let left   = array.slice(0, middle)
            let center = array.slice(middle, middle + 1)
            let right  = array.slice(middle + 1)
                        
            tree.left = redoTree(left, new TreeNode())
            tree.right = redoTree(right, new TreeNode())
            
            tree.val = center
            
            return tree
            
        }
        else{
            
            return null
            
        }

        
    }
    
    return redoTree(nums, new TreeNode())
    
}