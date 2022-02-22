/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    if(!head) return null
    
    let list = head
    let elem = []
    
    while(list){
        
        elem.push(list.val)
        
        list = list.next
        
    }
    
    let reversed = new ListNode()
    
    head = reversed
    
    elem.reverse().forEach((e, i) => {
        
        reversed.val = e
        
        if(i !== elem.length - 1){
            reversed.next = new ListNode() 
            reversed = reversed.next
                
        }
        
    })
    
    return head
    
}