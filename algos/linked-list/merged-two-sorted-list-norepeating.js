/**
 * Merge two sorted linked lists without repeating

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeWithoutReapeating(list1, list2) {
  let head = new ListNode();
  let curr = head;

  while (list1 && list2) {
    if (list1.val === list2.val) {
      curr.next = list1;
      list1 = list1.next;
      list2 = list2.next;
      curr = curr.next;
      continue;
    }
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 === null ? list2 : list1;
  return head.next;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let r1 = mergeWithoutReapeating(l1, l2);
console.log(r1);
