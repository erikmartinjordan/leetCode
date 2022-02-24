/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let list = head
    let arr = []
    
    while(list){
        
        arr.push(list.val)
        
        list = list.next
        
    }
    
    return [...arr].reverse().every((e, i) => e === arr[i])
    
}