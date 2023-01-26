// 876. Middle of the Linked List
// Easy
// 8.6K
// 246
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.
//
//     If there are two middle nodes, return the second middle node.
//
//
//
//     Example 1:
//
//
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
//
//
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
//
//
//     Constraints:
//
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

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
var middleNode = function(head) {
    let p1 = head
    let p2 = head

    while(p2 !== null && p2.next !== null) {
        p1 = p1.next
        p2 = p2.next.next
    }

    return p1
};