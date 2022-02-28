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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    const exploreTree = (root, path, paths) => {
        
        path = [...path, root.val]
        
        if(root.left)
            exploreTree(root.left, path, paths)
    
        if(root.right)
            exploreTree(root.right, path, paths)

        if(!root.left && !root.right){
            paths.push(path.join('->'))
        }
        
        return paths
        
    }
    
    return exploreTree(root, [], [])
    
}