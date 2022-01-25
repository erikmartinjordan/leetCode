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
var maxDepth = function(root) {
    
    if(!root) return 0
    
    const exploreTree = (root, depth) => {
        
        let left  = []
        let right = []
        
        if(root.left)
            left = exploreTree(root.left, depth + 1)
        
        if(root.right)
            right = exploreTree(root.right, depth + 1)
        
        return Math.max(left, right, depth)
        
    }
    
    return exploreTree(root, 1)
    
}