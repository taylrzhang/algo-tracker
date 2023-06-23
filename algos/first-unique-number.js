/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.map = {};
  //dummy head and tail
  this.head = Node(-1);
  this.tail = Node(-1);
  this.head.next = this.tail;
  this.tail.prev = this.head;

  for (let num of nums) {
    add(num);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  return this.head.next.val;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  //check if the value in map, if so, remove it from dll, unlink this node with dll
  //otherwise, add the value in map and add it at the end of dll
  if (this.map[value]) {
    const node = this.map[value];
    let prev = node.prev;
    let next = node.next;
    if (prev) {
      prev.next = next;
      next.prev = prev;
      node.prev = null;
      node.next = null;
    }
  } else {
    let newNode = Node(value);

    let last = this.tail.prev;
    last.next = newNode;
    newNode.prev = last;
    newNode.next = this.tail;
    this.tail.prev = newNode;

    this.map[value] = newNode;
  }
};

function Node(val, prev, next) {
  this.val = val;
  this.prev = prev ? prev : null;
  this.next = next ? next : null;
}
