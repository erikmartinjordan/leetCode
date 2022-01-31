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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
      
    if(!root) return false
    
    var found = false
    
    const exploreTree = (root, start) => {
        
        let sum = start + root.val
        
        if(root.left)
            exploreTree(root.left, sum)
        
        if(root.right)
            exploreTree(root.right, sum)
        
        if(!root.left && !root.right && sum === targetSum)
            found = true
            
    }
    
    exploreTree(root, 0)
    
    return found
    
}