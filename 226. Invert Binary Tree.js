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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root) return null
    
    const exploreTree = (root) => {
        
        var left
        var right
        
        if(root.left){
                        
            left = exploreTree(root.left)
            
        }
        
        if(root.right){
            
            right = exploreTree(root.right)
            
        }

        return (new TreeNode(root.val, right, left))
        
    }
    
    return exploreTree(root)

}