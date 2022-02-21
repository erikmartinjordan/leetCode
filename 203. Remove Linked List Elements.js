/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    
    if(!head) return null
    
    let list = head
    let result = new ListNode()
    
    head = null
    
    while(list){
                
        if(!head && list.val !== val){
            
            head = result
            
        }
        if(head && list.val !== val){
            
            result.val = list.val
            
        }
        if(head && list.next && list.next.val !== val){
            
            result.next = new ListNode()
            result = result.next
            
        }
        
        list = list.next
        
    }
    
    return head
    
}