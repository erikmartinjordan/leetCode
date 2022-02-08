/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    if(!head) return false
    
    let list = head
    let pointers = {}
    
    while(list.next){
        
        pointers[list.val] = pointers[list.val] || []
        
        if((pointers[list.val]).some(pointer => pointer === list.next))
            return true
        
        pointers[list.val].push(list.next)
        
        list = list.next
        
    }
    
    return false
    
}