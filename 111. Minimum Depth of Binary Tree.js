/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    
    if(!root) return 0
    
    var min = 10 ** 5
    
    const exploreTree = (root, jumps) => {
                
        if(root.left)
            exploreTree(root.left, jumps + 1)
        
        if(root.right)
            exploreTree(root.right, jumps + 1)
        
        if(!root.left && !root.right){
            
            min = Math.min(jumps, min)
            
        }
        
    }
    
    exploreTree(root, 1)
    
    return min
    
}