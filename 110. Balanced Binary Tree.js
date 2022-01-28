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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    if(!root) return true
    
    var height_balanced = true
    
    const exploreTree = (root, level) => {
        
        let left = level
        let right = level
        
        if(root.left)
            left = exploreTree(root.left, level + 1)
        
        if(root.right)
            right = exploreTree(root.right, level + 1)
        
        if(Math.abs(left - right) > 1)
            height_balanced = false
        
        return Math.max(level, left, right)
        
    }
    
    exploreTree(root, 0)
    
    return height_balanced
    
}