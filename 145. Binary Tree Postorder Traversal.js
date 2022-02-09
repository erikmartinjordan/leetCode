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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    
    if(!root) return []
    
    const exploreTree = (root) => {
        
        let left = []
        let right = []
        
        if(root.right)
            right = exploreTree(root.right)
        
        if(root.left)
            left = exploreTree(root.left)

        return [...left, ...right, root.val]        
        
    }
    
    return exploreTree(root)
    
}