/** 234
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 * 
    Input: head = [1,2,2,1]
    Output: true

    Input: head = [1,2]
    Output: false
 */

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
var isPalindrome = function (head) {
  //find mid node
  //reverse the second half
  //compare the first and second half
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = (nxt = null);
  let curr = slow;
  while (curr) {
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  let node = head;
  while (prev) {
    if (prev.val !== node.val) return false;
    else {
      prev = prev.next;
      node = node.next;
    }
  }
  return true;
};
