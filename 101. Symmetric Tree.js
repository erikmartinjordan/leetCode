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
var isSymmetric = function(root) {
 
    const exploreTree = (root, direction) => {
        
        let left  = []
        let right = []
        
        if(root.left)
            left = exploreTree(root.left, 'l')
        
        if(root.right)
            right = exploreTree(root.right, 'r')
            
        return [...left, [root.val, direction], ...right]
        
    }
    
    let arr = exploreTree(root, 'o')
        
    let middle = Math.ceil(arr.length/2)
    
    let left  = arr.slice(0, middle - 1)
    let right = arr.slice(middle)
    
    
    return left.length === right.length && !left.reverse().some((_, i, left_r) => (left_r[i][0] !== right[i][0] || left_r[i][1] === right[i][1]))
    
}