/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    if(!headA || !headB) return null
    
    let ref_A = []
    let ref_B = []
    
    let root_A = headA
    let root_B = headB
            
    while(root_A){
        
        ref_A.push(root_A)
        
        root_A = root_A.next
        
    }
        
    while(root_B){
        
        if(ref_A.some(ref => ref === root_B))
            return root_B
        
        root_B = root_B.next
        
    }
    
    return null
    
}