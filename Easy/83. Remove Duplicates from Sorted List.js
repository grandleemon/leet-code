// 83. Remove Duplicates from Sorted List
// Easy
// 6.7K
// 232
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
//
//
//
//     Example 1:
//
//
// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:
//
//
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
//
//
// Constraints:
//
//     The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
var deleteDuplicates = function(head) {

    // declare variable current and initializes it to head.
    let current = head;
    // if head and current head next value is not null
    while(current !== null && current.next !== null){
        // if current head value is equal to next
        if(current.val === current.next.val){
            current.next = current.next.next; // store current.next.next value to current.next so it will remove current.next value in linkedlist
        }else{ // if current head value is not equal to next then move forward
            current = current.next;
        }
    }

    return head;
};