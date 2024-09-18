/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prev = null
    let slowPointer = head
    let fastPointer = head

    if (!head.next) return head = null

    while (n !== 0 && fastPointer !== null) {
        fastPointer = fastPointer.next
        n--
    }

    while (fastPointer !== null) {
        prev = slowPointer
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next
    }

    if (prev) prev.next = slowPointer.next
    if (!prev) {
        temp = head
        head = head.next
        temp = null
    }

    return head
};
