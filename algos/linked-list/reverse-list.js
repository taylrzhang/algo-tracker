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
var reverseList = function (head) {
  //two pointers
  let prev = null,
    curr = head;
  while (curr !== null) {
    let next = curr.next;
    //reverse
    curr.next = prev;
    //reassign prev and curr
    prev = curr;
    curr = next;
  }

  return prev;
};
